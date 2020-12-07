from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for,
)
from flaskr.db import get_db
from flaskr.gps import locate2
import datetime

BP = Blueprint('quarantine', __name__, url_prefix='/quarantine')


@BP.route('/log', methods=['POST'])
def log():
    current_user = g.user
    username = current_user['username']
    c_json = request.get_json()
    symptoms = c_json.get('symptoms')
    today = datetime.date.today()
    current_location = locate2()
    # print(current_location)
    db = get_db()
    if db.execute('SELECT * FROM quarantine WHERE username = ?', (username,)).fetchone() is not None:
        flag = True
    else:
        flag = False
    if flag:
        # 这里是检查了库里面有这名用户的定位记录，下面将对比经纬度
        # sequence = db.column_names
        last_location = db.execute('select latitude, longitude from quarantine where username = ? limit 0, 1',
                                   (username,)).fetchone()
        # row = dict(zip(db.column_names, db.fetchone()))
        # print('{latitude}, {longitude}'.format(row))
        print(last_location[0])
        if (last_location[0] - 0.03 <= current_location[0] <= last_location[0] + 0.03) and (
                last_location[0] - 0.03 <= current_location[0] <= last_location[0] + 0.03):
            validity = True
        else:
            validity = False
        # 这一行取出用户的第一条定位记录例：last_location = (latitude, longitude)
        # 这一行 current_location 与 last_location对比 (+- 0.03, +- 0.03)
        # if 满足 validity = True
        # else validity = False
    else:
        validity = True
    # if quarantine is valid, then we'll record user's quarantine log
    if validity:
        db.execute(
            'INSERT INTO quarantine (username, date, symptoms, quarantine_validity, latitude, longitude) VALUES (?, '
            '?, ?, ?, ?, ?)',
            (username, today, symptoms, validity, current_location[0], current_location[1]))
        db.commit()

        db.execute('update user_info set is_quarantined = 1 where username = ?',
                   username)
        db.commit()

        db.execute('update user_info set quarantine_days = quarantine_days+1 where username = ?',
                   username)
        db.commit()
    # else, we'll clear this user's quarantine history and this user need to restart his/her quarantine
    else:

        db.execute('DELETE FROM quarantine where username = ?', username)
        db.commit()

        db.execute('update user_info set is_quarantined = 0 where username = ?', username)
        db.commit()

        db.execute('update user_info set quarantine_days = 0 where username = ?', username)
        db.commit()
        return {"msg": "Quarantine is not valid"}

    if db.execute('SELECT quarantine_days FROM user_info WHERE username = ?', (username,)).fetchone() == 14:
        db.execute('update user_info set quarantine_days = 0 where username = ?',
                   username)
        db.commit()
        db.execute('update user_info set is_quarantined = 0 where username = ?',
                   username)
        db.commit()
        db.execute('update user_info set at_risk = 0 where username = ?',
                   username)
        db.commit()
        return {{"message": "Congratulations! You have finished your quarantine!"}}
    return {{"message": "Successfully Recorded!"}}

    # 需要添加隔离不合格之后(validity = 0),如果用户重新开始隔离，需要删除用户之前的隔离数据。

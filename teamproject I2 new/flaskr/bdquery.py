"""Import required packages."""
from flask import (
    Blueprint, flash, render_template, request, jsonify, g
)
from flaskr.db import get_db

BP = Blueprint('dbquery', __name__, url_prefix='/dbquery')


@BP.route('/contact_query', methods=['POST'])
def contact_query():
    # current_user = g.user
    # username = current_user['username']
    db = get_db()
    username = db.execute(
        'select username from current_user order by id  desc limit 1 '
    ).fetchone()
    username = username[0]
    num = 0
    if db.execute(
        'SELECT id FROM user WHERE username = ?', (username,)
    ).fetchone() is not None:
        buildings = db.execute('select  mudd, nwc, bulter, lerner, others, date from dailypass'
                                     ' where username = ？ order by date desc limit 1', username).fetchone()
        mudd = buildings(0)
        nwc = buildings(1)
        lernerhall = buildings(2)
        bulter = buildings(3)
        others = buildings(4)
        date = buildings(5)

        for i in [mudd, nwc, lernerhall, bulter, others]:
            if i == 1:
                contact = db.execute('select username from dailypass where date = ？and ?=1', (date, i)).fetchone()
                num += len(contact) - 1
        # contact = database.execute( 'select username, test_result from user_info where username in (select username
        # from dailypass where building ' '=( ' 'select building from dailypass where username=?) and visittime = ('
        # 'select visittime from dailypass where username=?) and date = (' 'select date from dailypass where
        # username=?))', (username, username, username)).fetchone()
        # print(contact)
        # flash(contact)
    # print (num)
    return {"msg": str(num), "status" : "200 ok"}

# return number-1 ,show query result on login page
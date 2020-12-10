from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for,
)
from flaskr.db import get_db
import requests

BP = Blueprint('pretrain', __name__, url_prefix='/pretrain')


@BP.route('/pretrain', methods=['POST'])
def pretrain():
    c_json = request.get_json()
    # print(c_json)
    username = c_json.get('username')
    # value = c_json.get('boolean')
    db = get_db()
    # status = requests.get('https://localhost:3000/pretrain')
    # user = g.user
    g.user = username
    print('saved', g.user)
    print('pretrain!!!!!!', c_json)
    db.execute(
        'INSERT INTO current_user (username) VALUES (?)', (username,))
    db.commit()
    # username = user['username']
    db.execute(
        'INSERT INTO user_info (username, pretrain_status) VALUES (?,1)', (username,))
    db.commit()
    # db.execute(
    #     'update user_info set pretrain_status = ? where username = ?',
    #     (status, username))
    # db.commit()
    # return true/false frontend do the logic part
    return 'OK'

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for,
)
from flaskr.db import get_db
import requests

BP = Blueprint('pretrain', __name__, url_prefix='/pretrain')


@BP.route('/pretrain', methods=['POST'])
def pretrain():
    c_json = request.get_json()
    username = c_json.get('username')
    db = get_db()
    g.user = username
    print('saved', g.user)
    print('pretrain!!!!!!', c_json)
    db.execute(
        'INSERT INTO current_user (username) VALUES (?)', (username,))
    db.commit()
    db.execute(
        'INSERT INTO user_info (username, pretrain_status) VALUES (?,1)', (username,))
    db.commit()
    return {"msg" : "succeed"}
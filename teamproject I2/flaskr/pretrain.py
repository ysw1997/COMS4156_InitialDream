from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for,
)
from flaskr.db import get_db
import requests

BP = Blueprint('pretrain', __name__, )


@BP.route('/pretrain', methods=['GET'])
def pretrain():
    db = get_db()
    status = requests.get('https://localhost:3000/pretrain')
    user = g.user
    username = user['username']
    db.execute(
        'update user_info set pretrain_status = ? where username = ?',
        (status, username))
    db.commit()
    # return true/false frontend do the logic part

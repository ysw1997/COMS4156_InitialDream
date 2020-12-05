"""Import required packages."""
from flask import (
    Blueprint, flash, render_template, request, jsonify, g
)
from flaskr.db import get_db
import flaskr.user as user
from flaskr.auth import load_logged_in_user


BP = Blueprint('dbquery', __name__, url_prefix='/dbquery')


@BP.route('/contact_query', methods=['GET'])
def contact_query():
    # load_logged_in_user()
    user = g.user
    username = user['username']
    # username = g.username


    database = get_db()


    contact = database.execute(
        'select username, test_result from user_info where username in (select username from dailypass where building =('
    'select building from dailypass where username=?) and visittime = ('
    'select visittime from dailypass where username=?) and date = ('
    'select date from dailypass where username=?))', (username, username, username)).fetchone()
    print(contact)
    flash(contact)
    return jsonify(contact)

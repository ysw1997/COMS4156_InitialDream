import functools
import sqlite3

from flask import (
    Blueprint, flash, g, redirect, render_template, request, session, url_for, Flask, jsonify
)
from flaskr.db import get_db

from flask import Flask, render_template, request, flash
import datetime

# import forms


BP = Blueprint('dailypass', __name__, url_prefix='/dailypass')


@BP.route('/submit', methods=['POST'])
def submit():
    db = get_db()
    username = db.execute(
        'select username from current_user order by id  desc limit 1 '
    ).fetchone()
    username = username[0]
    # current_user = g.user
    # username = current_user['username']
    # change format to receive info from frontend
    c_json = request.get_json()

    # -------------------------------

    # visittime = request.form['visittime']
    # building = request.form["building"]
    # username = c_json.get('Username')
    mudd = c_json.get('Mudd')
    bulter = c_json.get('Bulter')
    lernerhall = c_json.get('LearnrHall')
    nwc = c_json.get('NWC')
    others = c_json.get('Others')
    symptoms = c_json.get('symptom')
    state = c_json.get('State')
    today = datetime.date.today()
    # -----------------------------------
    print (state)
    is_lowrisk = db.execute('SELECT id FROM high_risk_states WHERE statename = ?', (state,)).fetchone()
    db.execute(
        'INSERT INTO dailypass (username, date, mudd, bulter, lerner, nwc, others, symptoms) VALUES (?,?,?,?,?,?,'
        '?,?)',
        (username, today, mudd, bulter, lernerhall, nwc, others, symptoms)
    )
    db.commit()
    print(c_json)
    # print(symptoms.type())
    print('sympton',symptoms,'highrisk',is_lowrisk)
    if symptoms == True or is_lowrisk is  None:
        db.execute(
            'update user_info set at_risk = ? where username = ?',
            (1, username))
        db.commit()
        # return json to tell frontend which page to jump to
        return {"msg": "yellow"}
        # return render_template('yellowpass.html')
    ##### update at 9:53 AM
    check_risk = db.execute('select at_risk from user_info where username = ?', (username,)).fetchone()[0]
    if check_risk == 0:
        return {"msg": "green"}
    else:
        return {"msg": "yellow"}
    # return render_template('greenpass.html')


#     flash(error)
# return render_template('submit.html')

def check_name(name):
    db = get_db()

    db.execute('SELECT * FROM user where name = ?', name)
    if len(db.fetchall()) > 0:
        return True
    return False

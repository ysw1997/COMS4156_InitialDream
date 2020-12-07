import functools

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
    current_user = g.user
    username = current_user['username']
    # change format to receive info from frontend
    c_json = request.get_json()

    # -------------------------------

    # visittime = request.form['visittime']
    # building = request.form["building"]
    mudd = c_json.get('Mudd')
    bulter = c_json.get('Bulter')
    lernerhall = c_json.get('LernerHall')
    nwc = c_json.get('NWC')
    others = c_json.get('Others')
    symptoms = c_json.get('symptoms')
    state = c_json.get('state')
    today = datetime.date.today()
    # -----------------------------------
    is_highrisk = db.execute('SELECT id FROM high_risk_states WHERE statename = ?', (state,)).fetchone()
    db.execute(
        'INSERT INTO dailypass (username, date, mudd, bulter, lernerhall, nwc, others, symptoms, ) VALUES (?,?,?,?)',
        (username, today, mudd, bulter, lernerhall, nwc, others, symptoms)
    )
    db.commit()
    if symptoms == '1' or is_highrisk is not None:
        db.execute(
            'update user_info set at_risk = ? where username = ?',
            (1, username))
        db.commit()
        # return json to tell frontend which page to jump to
        return {"pass": "yellow"}
        # return render_template('yellowpass.html')

    return {"pass": "green"}
    # return render_template('greenpass.html')
#     flash(error)
# return render_template('submit.html')

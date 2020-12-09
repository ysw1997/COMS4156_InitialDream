from flask import (
    Blueprint, request
)
from flaskr.db import get_db
import datetime

BP = Blueprint('dailypass', __name__, url_prefix='/dailypass')


@BP.route('/submit', methods=['POST'])
def submit():
    db = get_db()
    c_json = request.get_json()
    username = c_json.get('username')

    mudd = c_json.get('Mudd')
    bulter = c_json.get('Bulter')
    lernerhall = c_json.get('LernerHall')
    nwc = c_json.get('NWC')
    others = c_json.get('Others')
    symptoms = c_json.get('symptoms')
    state = c_json.get('state')
    today = datetime.date.today()
    # -----------------------------------
    is_highrisk = db.execute('SELECT id FROM high_risk_states '
                             'WHERE statename = ?',
                             (state,)).fetchone()

    db.execute(
        'INSERT INTO dailypass (username, date, mudd, bulter, lerner, nwc, '
        'others, symptoms) VALUES (?, '
        '?, ?, ?, ?, ?, ?, ?)',
        (username, today, mudd, bulter, lernerhall, nwc, others, symptoms))

    db.commit()

    if symptoms is True or is_highrisk is not None:
        db.execute(
            'update user_info set at_risk = ? where username = ?',
            (1, username))
        db.commit()
        # return json to tell frontend which page to jump to
        return {"pass": "yellow"}

    return {"pass": "green"}

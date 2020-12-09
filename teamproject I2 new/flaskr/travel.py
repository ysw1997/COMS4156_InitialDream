from bs4 import BeautifulSoup
from flaskr.db import get_db
import requests
import re
from flask import Blueprint

BP = Blueprint('travel', __name__, url_prefix='/travel')


@BP.route('/update', methods=['POST'])
def get_info():
    # target = 'https://covid19.nj.gov/faqs/nj-information' \
    #          '/travel-and-transportation' \
    #          '/which-states-are-on-the-travel' \
    #          '-advisory-list-are-there-travel-restrictions
    #          -to-or-from-new-jersey '
    target2 = 'https://www.governor.ny.gov/news/governor-cuomo-' \
              'announces-travel-advisory-requiring-14-day-quarantine'
    req = requests.get(url=target2)
    html = req.text
    bf = BeautifulSoup(html)
    texts = bf.find_all('ul')
    s = texts[3].text

    process1 = re.sub(u"\\(.*?\\)|\\{.*?}|\\[.*?]", "", s)
    process2 = "".join(process1.split(' ')).split('\n')
    states = list(filter(lambda x: x != '', process2))
    db = get_db()
    db.execute('DELETE FROM' + ' ' + 'high_risk_states')
    db.commit()
    save(states)
    print(states)
    return {"msg": "Updated"}


# return success message
def save(states):
    for i in range(len(states)):
        db = get_db()
        db.execute(
            'INSERT INTO high_risk_states (id, statename) '
            'VALUES (?, ?)', (i, states[i])
        )
        db.commit()
    return None

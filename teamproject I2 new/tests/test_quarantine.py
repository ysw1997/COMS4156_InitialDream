from flaskr.__init__ import create_app
from flask.testing import FlaskClient
from flaskr.db import get_db
import time
import datetime

app = create_app()
app.app_context().push


# user with symptoms
def test_1(client: FlaskClient):
    with client:
        results = client.post(
            'quarantine/log',
            json={"username": "test_user1", "symptoms": True}
        ).get_json()
        assert results.get('status') == "Invalid quarantine log"


# user with no symptoms
def test_2(client: FlaskClient):
    with app.app_context():
        with client:
            results = client.post(
                'quarantine/log',
                json={"username": "test_user2", "symptoms": False}
            ).get_json()
            assert results.get('status') == "recorded"


# test user who went out, quarantine failed
def test_3(client):
    with app.app_context():
        with client:
            db = get_db()
            init_username = 'test_user3'
            init_latitude = 0
            init_longitude = 0
            today = datetime.date.today()
            symptoms = 0
            validity = 1
            # db.execute('INSERT INTO quarantine (username, latitude,
            # longitude) VALUE (?, ?, ?)',
            #            (init_username, init_latitude, init_longitude))
            db.execute(
                'INSERT INTO quarantine (username, date, quarantine_validity, '
                'symptoms, latitude, longitude) VALUES ('
                '?, '
                '?, ?, ?, ?, ?)',
                (init_username, today, validity, symptoms,
                 init_latitude, init_longitude))
            db.commit()
            time.sleep(1)
            results = client.post(
                'http://localhost:5000/quarantine/log',
                json={"username": "test_user3", "symptoms": False}
            ).get_json()
            assert results.get('status') == "recorded"


def test_5(client):
    with client:
        results = client.post(
            'http://localhost:5000/quarantine/log',
            json={"username": "test_user3", "symptoms": False}
        ).get_json()
        assert results.get('status') == "restart quarantine"


# test user who will finish his/her quarantine
def test_4(client: FlaskClient):
    with app.app_context():
        with client:
            db = get_db()
            init_username = 'test_user4'
            init_quarantine_days = 13
            db.execute(
                'INSERT INTO user_info (username, quarantine_days) '
                'VALUES (?, ?)',
                (init_username, init_quarantine_days))
            db.commit()
            results = client.post(
                'http://localhost:5000/quarantine/log',
                json={"username": "test_user4", "symptoms": False}
            ).get_json()
            assert results.get('status') == "finished"

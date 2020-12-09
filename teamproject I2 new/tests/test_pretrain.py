from flaskr.__init__ import create_app
from flask.testing import FlaskClient
from flaskr.db import get_db
import time
import datetime

app = create_app()
app.app_context().push

def test_case(client:FlaskClient):
    with app.app_context():
        with client:
            data = {
                "username" : "test_user1"
            }
        response = client.post('/pretrain/pretrain',
            json = data).get_json()
        assert response.get("msg") == "succeed"
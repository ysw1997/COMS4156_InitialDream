from flask.testing import FlaskClient


def test_case2(client=FlaskClient):
    with client:
        data = {
            "username" : "test_user1"
        }
        response = client.post('http://localhost:5000/dbquery/contact_query',
            json = data)
        assert response.status == '200'

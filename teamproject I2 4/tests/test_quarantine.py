import pytest
import requests


from flask.testing import FlaskClient

from conftest import client  # noqa
#from utils.tools import format_headers



# def test_1(client: FlaskClient):
#     with client:
#         results = client.post(
#             'quarantine/log',
#             json={"username" : "kkk", "symptoms" : True}
#         ).get_json()
#         assert results.get('status') == "Invalid quarantine log"

# def test_2(client: FlaskClient):
#     with client:
#         results = client.post(
#             'quarantine/log',
#             json={"username" : "testuser", "symptoms" : False}
#         ).get_json()
#         assert "status" in results

# def test_3(client: FlaskClient):
#     with client:
#         results = client.post(
#             'quarantine/log',
#             json={"username" : "testuser2", "symptoms" : True}
#         ).get_json()
#         assert "status" in results
#
# @pytest.mark.parametrize(('username', 'symptom'), (
#         ('k', '0'),
#         ('test_user', '0'),
#
# ))
# def test_log(username, symptom):
#     assert requests.post('http://localhost:5000/quarantine/log', json={'username':username,
#                                                                        "symptom":symptom}).status_code == 200
#     response = requests.post(
#         'http://localhost:5000/quarantine/log', json={'username': username,
#                                  'symptom': symptom}
#     ).json()
#     assert response.get('status') == 'recorded'
#
# #
# def test_case1():
#     # data1 = {"username": "abc"}
#     # url_path = "http://localhost:5000/auth/login"
#     # data1 = {
#     #     "username" : "abc"
#     # }
#     # c_json1 = requests.post(url_path, json=data1)
#     # c_json1 = c_json1.status_code
#     # assert c_json1 == 200
#
#     data2 = {"symptoms": True, "username": "abcd"}
#     c_json = requests.post('http://localhost:5000/quarantine/log', json=data2).json()
#     status = c_json.get('status')
#     # status=c_json.get('status')
#     assert status == 'Invalid quarantine log'
#     print(c_json, '__--------------!!!')

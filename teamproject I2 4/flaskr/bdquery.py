# coding=utf-8
"""Import required packages."""
from flask import (
    Blueprint, flash, render_template, request, jsonify, g
)
from flaskr.db import get_db

BP = Blueprint('dbquery', __name__, url_prefix='/dbquery')


@BP.route('/contact_query', methods=['POST'])
def contact_query():
    # current_user = g.user
    # username = current_user['username']
    db = get_db()
    username = db.execute(
        'select username from current_user order by id  desc limit 1 '
    ).fetchone()
    username = username[0]
    num = 0
    if db.execute(
            'SELECT id FROM user_info WHERE username = ?', (username,)
    ).fetchone() is not None:

        buildings = db.execute('select mudd, nwc, bulter, lerner, others, date from dailypass'
                               ' where username = ? order by date desc limit 1', (username,)).fetchone()
        mudd = buildings[0]
        nwc = buildings[1]
        lernerhall = buildings[2]
        bulter = buildings[3]
        others = buildings[4]
        date = buildings[5]
        print (date)
        if mudd == 1:
            contact1 = db.execute('select count(distinct username) from'
                                  '(select username, test_result from user_info '
                                  'where username in (select username from dailypass where mudd=1 and date = ? ) '
                                  'and test_result =1)',(date,)
                                  ).fetchone()[0]
            print ('1',contact1)
            num+=contact1
        if nwc == 1:
            contact2 = db.execute('select count(distinct username) from '
                                  '(select username, test_result from user_info'
                                  'where username in (select  username from dailypass where nwc=1 and date = ?)'
                                  'and test_result=1)', (date,)).fetchone()[0]
            num+=contact2
            print ('2', contact2)
        if lernerhall == 1:
            contact3 = db.execute('select count(distinct username) '
                                  'from (select username, test_result from user_info'
                                  'where username in (select  username from dailypass where lerner=1 and date = ?)'
                                  'and test_result=1)', (date,)).fetchone()[0]
            num+=contact3
            print ('3', contact3)
        if bulter == 1:
            contact4 = db.execute('select count(distinct username) from '
                                  '(select username, test_result from user_info'
                                  'where username in (select  username from dailypass where bulter=1 and date = ?)'
                                  'and test_result=1)', (date,)).fetchone()[0]
            num+=contact4
            print ('4', contact4)
        if others == 1:
            contact5 = db.execute('select count(distinct username) from '
                                  '(select username, test_result from user_info'
                                  'where username in (select  username from dailypass where others=1 and date = ?)'
                                  'and test_result=1)', (date,)).fetchone()[0]
            num+=contact5
            print ('5', contact5)
        # contact = database.execute( 'select username, test_result from user_info where username in (select username
        # from dailypass where building ' '=( ' 'select building from dailypass where username=?) and visittime = ('
        # 'select visittime from dailypass where username=?) and date = (' 'select date from dailypass where
        # username=?))', (username, username, username)).fetchone()
        # print(contact)
        # flash(contact)

    print (num)
    return {"msg": "There is "+str(num)+"person who visited the same building with you is covid-19 positive on "+str(date)}

# return number-1 ,show query result on login page

import os
from flask import Flask, render_template, request
from flask import Blueprint
from flaskr.db import get_db
# import our OCR function
from ocr_core import ocr_core

# define a folder to store and later serve the images
UPLOAD_FOLDER = '/static/uploads/'

# allow files of a specific type
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

BP = Blueprint('ocr', __name__, url_prefix='/ocr')


# function to check the file extension
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@BP.route('/test', methods=['POST'])
def test():
    f = request.files['file']
    extracted_text = ocr_core(f)
    current_user = g.user
    username = current_user['username']
    db = get_db()
    if 'Negative' in extracted_text:
        print('yes')
        db.execute('update user_info set test_result = ? where username = ?',
                   (0, username))
        db.commit()
        return {"msg": "Successed"}
    else:
        print('no')
        db.execute('update user_info set test_result = ? where username = ?',
                   (1, username))
        db.commit()
        return {"msg": "Failed"}

# route and function to handle the upload page
# @BP.route('/upload', methods=['POST'])
# def upload_page():
#     username = request.form['username']
#     # check if there is a file in the request
#     if 'file' not in request.files:
#         # return render_template('/ocr/upload.html', msg='No file selected')
#         return {"msg": "No file selected"}
#     file = request.files['file']
#     # if no file is selected
#     if file.filename == '':
#         # return render_template('/ocr/upload.html', msg='No file selected')
#         return {"msg": "No file selected"}
#     if file and allowed_file(file.filename):
#
#         # call the OCR function on it
#         extracted_text = ocr_core(file)
#
#         if 'Negative' in extracted_text:
#             db = get_db()
#             db.execute('DELETE FROM yellow_pool WHERE yellow_user = ?', (username,))
#             db.commit()
#             # return render_template('/ocr/upload.html',
#             #                        msg='Your test result is Negative, you will recieve Green Pass!')
#             return {"msg": "Your test result is Negative, you will recieve Green Pass!"}
#         else:
#             # return render_template('/ocr/upload.html',
#             #                        msg='Automatic identification failed. Please request manual identification!')
#             return {"msg": "Automatic identification failed. Please request manual identification!"}

from flask import request
from flask import Blueprint
from flaskr.db import get_db
from ocr_core import ocr_core

# define a folder to store and later serve the images
UPLOAD_FOLDER = '/static/uploads/'

# allow files of a specific type
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

BP = Blueprint('ocr', __name__, url_prefix='/ocr')


# # function to check the file extension
# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@BP.route('/test', methods=['POST'])
def test():
    f = request.files['file']
    print(f)
    extracted_text = ocr_core(f)
    # current_user = g.user
    username = request.values['username']
    print(username)

    # username = request.getParameter('username')
    print('ss')
    # username = c_json.get('username')

    db = get_db()
    if 'Negative' in extracted_text:
        print('yes')
        db.execute('update user_info set test_result = ? where username = ?',
                   (0, username))
        db.commit()
        return {"msg": "Succeed"}
    else:
        print('no')
        db.execute('update user_info set test_result = ? where username = ?',
                   (1, username))
        db.commit()
        return {"msg": "Failed"}

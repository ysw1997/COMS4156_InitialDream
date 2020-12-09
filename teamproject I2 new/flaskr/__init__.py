import os

from flask import Flask, send_from_directory


def create_app(test_config=None):
    app = Flask(__name__, instance_relative_config=True,
                static_folder='client/build', static_url_path='')

    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass


    from . import db
    db.init_app(app)

    from . import dailypass
    app.register_blueprint(dailypass.BP)

    from . import ocr
    app.register_blueprint(ocr.BP)

    from . import travel
    app.register_blueprint(travel.BP)

    from . import quarantine
    app.register_blueprint(quarantine.BP)

    from . import bdquery
    app.register_blueprint(bdquery.BP)

    from . import pretrain
    app.register_blueprint(pretrain.BP)

    @app.route('/')
    def serve():
        return send_from_directory(app.static_folder, 'index.html')

    return app

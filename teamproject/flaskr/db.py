"""db"""
import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext


def get_db():
    """get database"""
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db


def close_db():
    """close database"""
    current_db = g.pop('db', None)

    if current_db is not None:
        current_db.close()


def init_db():
    """init database"""
    current_db = get_db()

    with current_app.open_resource('schema.sql') as func:
        current_db.executescript(func.read().decode('utf8'))


@click.command('init-db')
@with_appcontext
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')


def init_app(app):
    """init app"""
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)

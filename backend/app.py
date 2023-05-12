from flask import Flask
import config

from api.signup import signup_route
from api.login import login_route
from api.reset_password import reset_route
from api.user import user_route
from api.admin import admin_route
from api.donation import donation_route
from api.donation_request import donation_request_route

from extensions import db, migrate, ma, cors, mail


def create_app(app_config):
    """Application-factory pattern"""
    app = Flask(__name__)
    app.config.from_object(app_config)

    # Initialize extensions
    # To use the application instances above, instantiate with an application:
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    cors.init_app(app)
    mail.init_app(app)

    app.register_blueprint(signup_route)
    app.register_blueprint(login_route)
    app.register_blueprint(reset_route)
    app.register_blueprint(user_route)
    app.register_blueprint(admin_route)
    app.register_blueprint(donation_route)
    app.register_blueprint(donation_request_route)

    return app


# Create an application instance
app = create_app(config.DevelopmentConfig)

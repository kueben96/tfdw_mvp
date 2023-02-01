from flask import Flask, jsonify, request
import json

import os
from api.login import login_route
from api.user import user_route
from api.donation import donation_route
from api.donation_request import donation_request_route

from extensions import db, migrate, ma, cors

from models import user, donation, donation_request


def create_app():
    """Application-factory pattern"""
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions
    # To use the application instances above, instantiate with an application:
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    cors.init_app(app)

    app.register_blueprint(login_route)
    app.register_blueprint(user_route)
    app.register_blueprint(donation_route)
    app.register_blueprint(donation_request_route)

    return app


# Create an application instance
app = create_app()

# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow

# if __name__ == "__main__":
#     port = int(os.environ.get('PORT', 5000))
#     app.run(debug=True, host='0.0.0.0', port=port)

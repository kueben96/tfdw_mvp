from flask import Flask, jsonify, request
import json

import os
from api.login import login_route
from api.donation import donation_route
from api.user import user_route

from extensions import db, migrate, ma, cors

from models import donation, user


def create_app():
    """Application-factory pattern"""
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('SQLALCHEMY_DATABASE_URI',
                                                           default="postgresql://docker:docker@database:5432/exampledb")
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    # Initialize extensions
    # To use the application instances above, instantiate with an application:
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    cors.init_app(app)

    app.register_blueprint(login_route)
    app.register_blueprint(donation_route)
    app.register_blueprint(user_route)

    return app


# Create an application instance
app = create_app()

# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow


# @app.route("/api/donors", methods=["GET"], strict_slashes=False)
# def articles():

#     donors = Donor.query.all()
#     results = donors_schema.dump(donors)

#     return jsonify(results)


# if __name__ == "__main__":
#     port = int(os.environ.get('PORT', 5000))
#     app.run(debug=True, host='0.0.0.0', port=port)

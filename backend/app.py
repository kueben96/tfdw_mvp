from flask import Flask, jsonify, request
import json
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os
from api.login import login_route
from api.donation import donation_route
from api.user import user_route

# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy()
migrate = Migrate()
ma = Marshmallow()
cors = CORS()


def create_app():
    """Application-factory pattern"""
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['SQLALCHEMY_DATABASE_URI']
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.register_blueprint(login_route)
    app.register_blueprint(donation_route)
    app.register_blueprint(user_route)

    # Initialize extensions
    # To use the application instances above, instantiate with an application:
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    cors.init_app(app)

    return app
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

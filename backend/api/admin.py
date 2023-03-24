import jwt
import os

from api.user import token_required
from extensions import db
from functools import wraps
from flask import Flask, jsonify, request, Blueprint

from models.user import User, user_schema, users_schema


admin_route = Blueprint('admin_route', __name__)


@admin_route.route('/api/admin_unreviewed_receivers', methods=['GET'])
@token_required()
def get_unreviewed_receivers(current_user):
    results = (db.session.query(User.id, User.club_name, User.reviewed)
               .filter_by(reviewed=False)).all()
    return jsonify([dict(id=x.id, club_name=x.club_name, reviewed=x.reviewed) for x in results])


@admin_route.route('/api/update_receiver_reviewed', methods=['PATCH'])
@token_required()
def update_user_reviewed(current_user):
    args = request.args.to_dict()
    user_id = args.get("id")

    user = User.query.get(user_id)
    user.reviewed = True
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)


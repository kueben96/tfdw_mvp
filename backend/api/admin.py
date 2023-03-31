from api.user import token_required
from extensions import db
from flask import Flask, jsonify, request, Blueprint

from models.user import User, user_schema, users_schema


admin_route = Blueprint('admin_route', __name__)


@admin_route.route('/api/unreviewed_receivers', methods=['GET'])
@token_required()
def get_unreviewed_receivers(current_user):
    """
    Admin user gets list of all unreviewed receivers.
    Args:
        current_user: admin user
    Returns: list of all unreviewed receivers
    """
    results = (db.session.query(User.id, User.club_name, User.date, User.reviewed)
               .filter_by(reviewed=False)).all()
    return jsonify([dict(id=x.id, club_name=x.club_name, date=x.date, reviewed=x.reviewed) for x in results])


@admin_route.route('/api/update_receiver_reviewed/<int:user_id>', methods=['PATCH'])
@token_required()
def update_user_reviewed(current_user, user_id):
    """
    Admin updates the reviewed status of a receiver to True.
    Args:
        current_user: admin user
    Returns: updated receiver user object

    """
    user = User.query.get(user_id)
    user.reviewed = True
    db.session.add(user)
    db.session.commit()

    return user_schema.jsonify(user)


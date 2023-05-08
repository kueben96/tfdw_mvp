import jwt
import os

from flask import Flask, jsonify, request, Blueprint, render_template, make_response
from datetime import datetime, timedelta

from flask_mail import Message
from werkzeug.security import generate_password_hash

from extensions import db, mail
from api.user import token_required, verify_email

reset_route = Blueprint('reset_route', __name__)


@reset_route.route('/api/forgot', methods=['POST'])
async def forgot_password():
    """
    Generates password reset token for user and sends email to user with link to password reset page.
    Returns: reset_token (JWT)
    """

    email = request.json.get("email", "")
    user = verify_email(email)

    # generates the JWT Token
    reset_token = jwt.encode({
            'id': user.id,
            'exp': datetime.utcnow() + timedelta(minutes=5)
    }, os.environ.get('SECRET_KEY'))

    msg = Message(
        '[TFDW] Reset Your Password',
        sender='support@tfdw.com',
        recipients=[user.email]
    )
    msg.body = render_template('reset_password.txt', user=user, token=reset_token)
    msg.html = render_template('reset_password.html', user=user, token=reset_token)
    mail.send(msg)

    return make_response(jsonify({'reset_token': reset_token.decode('UTF-8')}), 201)


@reset_route.route('/api/reset_password', methods=['PATCH'])
@token_required(reset=True)
def reset_password(current_user):
    """
    Reset password of user.
    reset_token is expected in header as "reset_token"
    password is expected in body (json)
    Args:
        current_user: user that has sent the request
    """
    password = request.json.get('password', '')
    current_user.password = generate_password_hash(password)

    db.session.add(current_user)
    db.session.commit()

    return make_response("Password reset successful.", 201)

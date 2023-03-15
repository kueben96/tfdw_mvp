import jwt
import os

from flask import Flask, jsonify, request, Blueprint, render_template
from datetime import datetime, timedelta

from werkzeug.security import generate_password_hash

from extensions import db
from models.user import User
from api.user import token_required, verify_reset_password_token, verify_email
from services.mail_service import send_email

reset_route = Blueprint('reset_route', __name__)


@reset_route.route('/api/forgot', methods=['POST'])
def forgot_password():
    url = "localhost:8000/api/reset"

    email = request.json.get("email", "")
    user = verify_email(email)

    # generates the JWT Token
    reset_token = jwt.encode({
            'id': user.id,
            'exp': datetime.utcnow() + timedelta(minutes=5)
    }, os.environ.get('SECRET_KEY'))

    return send_email('[TFDW] Reset Your Password',
                      sender='support@tfdw.com',
                      recipients=[user.email],
                      text_body=render_template('reset_password.txt',
                                                user=user, token=reset_token),
                      html_body=render_template('reset_password.html',
                                                user=user, token=reset_token))


@reset_route.route('/api/reset_password/<token>', methods=['POST'])
def reset_password(token):
    user = verify_reset_password_token(token)
    password = request.json.get('password', '')
    user.password = generate_password_hash(password)

    db.session.add(user)
    db.session.commit()

    return "Reset password."

    # TODO: does not work, url in email from forgot_password function does not work

    # return send_email('[TFDW] Password reset successful',
    #                   sender='support@tfdw.com',
    #                   recipients=[user.email],
    #                   text_body='Password reset was successful',
    #                   html_body='<p>Password reset was successful</p>')








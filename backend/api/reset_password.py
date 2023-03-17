import jwt
import os
import secrets
import string

from flask import Flask, jsonify, request, Blueprint, render_template
from datetime import datetime, timedelta

from werkzeug.security import generate_password_hash

from extensions import db
from models.user import User
from api.user import token_required, verify_reset_password_token, verify_email
from services.mail_service import send_email

reset_route = Blueprint('reset_route', __name__)


# TODO: implement temporary password
@reset_route.route('/api/forgot', methods=['POST'])
def forgot_password():

    email = request.json.get("email", "")
    user = verify_email(email)

    # # generates the JWT Token
    # reset_token = jwt.encode({
    #         'id': user.id,
    #         'exp': datetime.utcnow() + timedelta(minutes=5)
    # }, os.environ.get('SECRET_KEY'))

    alphabet = string.ascii_letters + string.digits
    temp_password = ''.join(secrets.choice(alphabet) for i in range(20))  # for a 20-character password

    # TODO: store temp_password in database

    return send_email('[TFDW] Reset Your Password',
                      sender='support@tfdw.com',
                      recipients=[user.email],
                      text_body=render_template('reset_password.txt',
                                                temp_password=temp_password),
                      html_body=render_template('reset_password.html',
                                                temp_password=temp_password))


@reset_route.route('/api/reset_password/<token>', methods=['POST'])
def reset_password(token):
    user = verify_reset_password_token(token)
    password = request.json.get('password', '')
    user.password = generate_password_hash(password)

    db.session.add(user)
    db.session.commit()

    return send_email('[TFDW] Password reset successful',
                      sender='support@tfdw.com',
                      recipients=[user.email],
                      text_body='Password reset was successful',
                      html_body='<p>Password reset was successful</p>')








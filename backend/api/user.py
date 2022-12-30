from flask import Flask, jsonify, request, Blueprint

user_route = Blueprint('user_route', __name__)

@user_route.route('/')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alicessss@outlook.com'})


@user_route.route('/signin', methods=['POST'])
def post_signin():
    email = request.json['email']
    password = request.json['password']
    return "signin successful"
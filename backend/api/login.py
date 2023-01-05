from flask import Flask, jsonify, request, Blueprint

login_route = Blueprint('login_route', __name__)

@login_route.route('/api/login')
def index():
    return jsonify({'name': 'alice',
                    'email': 'alicessss@outlook.com'})


@login_route.route('/api/login', methods=['POST'])
def post_signin():
    data = request.get_json()
    return "signin successful"
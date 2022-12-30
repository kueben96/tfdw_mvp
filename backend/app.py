from flask import Flask, jsonify, request
import json
import os
from api.user import user_route
from api.donation import donation_route

app = Flask(__name__)
app.register_blueprint(user_route)
app.register_blueprint(donation_route)

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)

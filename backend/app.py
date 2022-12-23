from flask import Flask, jsonify
# from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)


@app.route('/')
# @cross_origin(supports_credentials=True)
def index():
    # return jsonify({'name': 'alice',
    #                 'email': 'alicessss@outlook.com'})
    return jsonify({'name': 'alice',
                    'location': 'hamburg',
                    'id': 1}, {'name': 'ben',
                               'location': 'hannover',
                               'id': 2}, )


@app.route('/api', methods=['GET'])
def donor_info():
    return jsonify({'name': 'alice',
                    'location': 'hamburg',
                    'id': 1}, {'name': 'ben',
                               'location': 'hannover',
                               'id': 2}, )


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)

# backend/app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
app.config["MONGO_URI"] = "mongodb://db:27017/fatimadb"  # Change the database name as needed
mongo = PyMongo(app)

@app.route('/api/user', methods=['POST'])
def create_user():
    user_data = request.json
    # Insert the user data into the MongoDB collection
    mongo.db.users.insert_one(user_data)
    return jsonify(message='User data submitted successfully!'), 201

@app.route('/api', methods=['GET'])
def hello():
    return jsonify(message='Hello from Flask!')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

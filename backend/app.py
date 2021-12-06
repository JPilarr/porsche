from flask import Flask, jsonify, make_response, request
import boto3
import json

app = Flask(__name__)

#Placeholder function for auth flow later    
@app.route("/signup", methods=["POST"])
def sign_up():
    parsed = request.json
    client = boto3.client('cognito-idp')
    response = client.initiate_auth(
        UserPoolId='xxxxxxxxx',
        ClientId='xxxxxxxxxxxxxx',
        AuthFlow='USER_PASSWORD_AUTH',
        AuthParameters={
            'USERNAME': parsed['username'],
            'PASSWORD': parsed['password']
        }
    )
    return jsonify(message='Hello from signup!')

#Placeholder function for auth flow later    
@app.route("/login", methods=["POST"])
def login():
    client = boto3.client('cognito-idp')
    response = client.initiate_auth(
        UserPoolId='xxxxxxxxx',
        ClientId='xxxxxxxxxxxxxx',
        AuthFlow='USER_PASSWORD_AUTH',
        AuthParameters={
            'USERNAME': 'xxxxxx',
            'PASSWORD': 'xxxxxx'
        }
    )
    return response

@app.route("/")
def hello_from_root():
    return jsonify(message='Hello from root!')


@app.route("/hello")
def hello():
    return jsonify(message='Hello from path!')


@app.errorhandler(404)
def resource_not_found(e):
    return make_response(jsonify(error='Not found!'), 404)

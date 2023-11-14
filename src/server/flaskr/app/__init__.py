#!flask/bin/python

import os
import sys
import uuid
import json

from flask import Flask, Request, request, jsonify
from flask_wtf.csrf import CSRFProtect, generate_csrf
from .modules.response import ok, bad_request, forbidden, not_found, server_error
from .modules.manager import Manager

app = Flask(__name__)
mgr = Manager()

# Load our SECRET_KEY from our configuration file.  This is required to enable
# CSRF capabilities.
dir_path = os.path.dirname(os.path.realpath(__file__))
with open(f'{dir_path}{os.path.sep}modules{os.path.sep}services{os.path.sep}config.json') as f:
    config = json.load(f)
    app.config.update(
        SECRET_KEY=config['flask']['secret_key']
    )

# Enable CSRF protection for all POST calls.
csrf = CSRFProtect()
csrf.init_app(app)

#########################################
# Routes
#########################################

@app.route('/api/login', methods=['POST'])
def is_user():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        entry_code = req_data.get('entry_code')
        
        if not email or not entry_code:
            return bad_request()

        user = mgr.get_user(email, entry_code)
        if user:
            return ok({ 'user' : user })

        return not_found()

    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route("/api/csrf", methods=['GET'])
def get_csrf():
    try:
        # Credit to https://www.reddit.com/r/flask/comments/oyfeax/comment/h7snrv7/
        # for the code used here
        response = jsonify(detail="success")
        response.headers.set("X-CSRFToken", generate_csrf())
        return response
    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route('/api/user', methods=['POST'])
def new_user():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        institution = req_data.get('institution')
        entry_code = req_data.get('entry_code')

        if not email or not entry_code or not institution:
            return bad_request()

        user_added = mgr.sign_up_user(email, req_data)
        if user_added:
            return ok({ 'user_added' : user_added })

        return bad_request()

    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route('/api/user/answers', methods=['POST'])
def update_data():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        entry_code = req_data.get('entry_code')
        answers = req_data.get('answers')

        if not email or not entry_code or not answers:
            return bad_request()

        user = mgr.user_valid(email, entry_code)
        if not user:
            return forbidden()

        updated = mgr.update_user_answers(email, entry_code, answers)
        return ok(updated)
    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route('/api/scores', methods=['POST'])
def get_scores():
    try:
        req_data = request.get_json()
        email = req_data.get('email')
        entry_code = req_data.get('entry_code')

        if not email or not entry_code:
            return bad_request()

        if mgr.user_valid(email, entry_code):
            agg_score, n = mgr.get_scores()
            return ok({ 'all': agg_score, 'n': n })

        return forbidden()

    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()

@app.route('/api/config', methods=['GET'])
def get_config():
    try:
        return ok(mgr.get_config())

    except Exception as ex:
        sys.stderr.write(f'Error: {ex}\n')
        return server_error()
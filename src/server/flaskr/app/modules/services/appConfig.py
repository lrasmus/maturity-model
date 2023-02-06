#!/usr/bin/python
import requests
import json
import os

from datetime import datetime

class AppConfig:
    def __init__(self):
        admin, allowSignup, allowGuest = self.__load_config()
        self.admin = admin
        self.allowSignup = allowSignup
        self.allowGuest = allowGuest

    def __load_config(self):
        dir_path = os.path.dirname(os.path.realpath(__file__))

        # Assume config is in the same directory.
        with open(f'{dir_path}{os.path.sep}config.json') as f:
            config = json.load(f)
            return config['application']['admin'], config['application']['allowSignup'], config['application']['allowGuest']

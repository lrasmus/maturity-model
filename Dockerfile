## BUILD
FROM docker.io/library/node:18.14.1-alpine as builder

WORKDIR /code

COPY src/ui-client /code/
RUN npm install
RUN npm run build


## DEPLOY
FROM python:3.6-slim

EXPOSE 5002

# Keeps Python from generating .pyc files in the container
ENV PYTHONDONTWRITEBYTECODE=1

# Turns off buffering for easier container logging
ENV PYTHONUNBUFFERED=1

# Install dependencies needed for the API server.  This includes Apache and the mod_wsgi for Python3
RUN apt update && apt install -y \
    apache2 \
    libapache2-mod-wsgi-py3

WORKDIR /app
COPY src/server /app/server

WORKDIR /app/server

# Create a venv and install requirements
RUN python -m venv venv
# Need to re-activate venv for each command (https://pythonspeed.com/articles/activate-virtualenv-dockerfile/)
RUN . /app/server/venv/bin/activate && python -m pip install -r requirements.txt
RUN . /app/server/venv/bin/activate && python -m pip uninstall dataclasses -y

RUN mkdir /app/client
COPY --from=builder /code/build /app/client
COPY ./maturity-model.conf /etc/apache2/sites-available/000-default.conf
COPY ./maturity-model.wsgi /app/maturity-model.wsgi

RUN mkdir /var/log/maturity-model

# Expose port 80 from the container
EXPOSE 80

# Start Apache
CMD apachectl -D FOREGROUND

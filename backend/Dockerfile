FROM python:3.8-alpine
EXPOSE 8000
# # Tell Python to not generate .pyc
ENV PYTHONDONTWRITEBYTECODE 1
# # Turn off buffering
ENV PYTHONUNBUFFERED 1
# copy the requirements file into the image
COPY ./requirements.txt /app/requirements.txt
# switch working directory
WORKDIR /app
RUN pip install -r requirements.txt
# defining env vars
# ENV FLASK_APP=app.py
ENV FLASK_APP=routes.py
# watch app' files
ENV FLASK_DEBUG=true
ENV FLASK_ENV=development
# copy every content from the local file to the image
COPY . /app
ADD . /app


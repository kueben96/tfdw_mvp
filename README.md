# Prerequisites

- create a .env file in the root folder of this directory
- tfdw_platform/.env
- pass variable for AWS postgres connection string inside --> ask Kübra
- SQLALCHEMY_DATABASE_URI=${commectionstring}
- add secret key for JWT authentication --> ask Sarah
- SECRET_KEY=${secretkey}

## Start dockerized React and Flask development servers
- docker-compose up --build
- localhost:3000 -> react app
- localhost:8000 -> flask server

## To develop locally with react
- docker-compose up api
- change proxy in package.json to "http://localhost:8000"
- npm start -> localhost:3000

## To develop locally without fully dockerized backend
- use local environment with all packages from requirements.txt installed
- set environment variable SQLALCHEMY_DATABASE_URI: postgresql://docker:docker@database:5432/exampledb in local environment
- docker-compose up database
- docker-compose up adminer

## Database adminer login
- address: localhost:8080
- database system: PostgreSQL
- server name: database
- user: docker
- password: docker
- database: exampledb

## Register user
- route: /api/signup POST
- request_body: see list of sample bodies in backend/mock_data/user.json

## Log in
- route: /api/login POST
- request_body: see list of sample bodies in backend/mock_data/login.json
- example response_body:{ "refresh_token": "eyJ0eJAiOiJK1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZXhwIjoxNjc1NDM5MDI0fQ.m8LqSvsD8A_LaIHtqI9sjzNhAFTLVoznm3eikNYLZgg", "token": "eyJ0eJAiOiJK1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwiZXhwIjoxNjc1NDM5MDI0fQ.m8LqSvsD8A_LaIHtqI9sjzNhAFTLVoznm3eikNYLZgg"}

## Password reset via password forgotten link
- route: /api/forgot POST
- can be accessed without token
- email is expected in request body (json)
- user is verified via email
- user is sent a via email to a password reset page
- reset_token is sent in response

- route: api/reset_password PATCH
- expects reset_token in header
- expects new password in body (json)
- new password is saved in database

## Requests with authentications required
- add to headers: key: x-access-token, value: token received from login

## Token refresh
- add to headers: key: refresh-token, value: refresh_token received from login
- route: /api/refresh

## Database migrations
- docker exec -it  tfdw_mvp-api-1 sh
- setup migrations folder once with: flask db init
- re-run conainters with docker-compose up --build
- flask db migrate --> will detect changes in the SQLAlchemy Models
- flask db upgrade
- if error target db not up to date: "flask db stamp head" first
- see reference here: https://dev.to/yactouat/flask-postgres-sqlalchemy-migrations-dockerized-intro-2f8p

## Run tests in terminal

- execute all tests located in the test package: pytest

## Dashboard Filtering
- authentication is optional for dashboard (route: GET /api/donation)
- parameters, e.g. "red" for color need to be in language of database entries (in this case: English)
- parameters that can be filtered:
  - category (e.g. jersey_kit, jersey_top, jersey_pants, bib (Deutsch: Leibchen), tracksuit_top, football_sock (Deutsch: Stutzen), shoes, goalkeeper_gloves, other)
  - color (e.g. red, yellow, green, blue, white, black, orange, turquoise, purple, pink, brown)
  - size_1 (children or adult)
  - size_2 (e.g. S, M, L for clothing, numbers for gloves, shoes etc.)
  - zip_code
- Example requests:
  - /api/donation?category=jersey
  - /api/donation?color=green
  - /api/donation?color=green&category=jersey&size_1=adult&size_2=M
  - /api/donation?category=shoes?color=gold

## Get Donation / Donation Request Details
- authentication required: x-access-token in header
- example route: GET /api/donation_details?id=1

## Local SMTP Server
- python -m smtpd -n -c DebuggingServer localhost:1025


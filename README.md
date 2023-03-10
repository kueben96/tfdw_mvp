# Prerequisites

- create a .env file in the root folder of this directory
- tfdw_platform/.env
- pass variable for AWS postgres connection string inside --> ask Kübra
- SQLALCHEMY_DATABASE_URI=${commectionstring}

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

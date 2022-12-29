## Start dockerized React and Flask development servers
- docker-compose up --build
- localhost:3000 -> react app
- localhost:8000 -> flask server

## To develop locally with react
- docker-compose up api
- change proxy in package.json to "http://localhost:8000"
- npm start -> localhost:3000


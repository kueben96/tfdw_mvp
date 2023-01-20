FROM node:lts-alpine

EXPOSE 3000
EXPOSE 35729

# Set working directory
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# copy files
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install --save
RUN npm install react-scripts -g

# Add React app to working directory
ADD . /app

# Start the React app
CMD ["npm", "start"]

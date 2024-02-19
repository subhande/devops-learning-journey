# Docker Image for this nodejs mongodb app

# Use the official image as a parent image
FROM node:20-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

ENV MONODB_HOST=mongodb \
    MONGO_DB_PORT=27017

# Set the working directory
# WORKDIR /usr/src/app
WORKDIR /app

# Copy the current directory contents into the container at /usr/src/app
COPY ./app/package*.json ./

# Install the dependencies
RUN npm install

# Copy the current directory contents into the container at /usr/src/app
COPY ./app .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run the app when the container launches
CMD ["node", "server.js"]
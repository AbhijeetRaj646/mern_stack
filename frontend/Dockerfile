# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json, and install dependencies.
COPY package*.json ./
RUN npm install

# Copy the rest of the application code.
COPY . .

# Expose the backend port.
EXPOSE 3000

# Start the Node.js server (index.js or your main server file).
CMD [ "npm", "start" ]

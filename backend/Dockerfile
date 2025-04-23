# Use the official Node.js image.
FROM node:14

# Set the working directory.
WORKDIR /usr/src/app

# Copy package.json and package-lock.json, and install dependencies.
COPY package*.json ./
RUN npm install 
RUN npm install dotenv

# Copy the rest of the application code.
COPY . .

# # Build the React application (optional, if you're using production build).
# RUN npm run build

# Expose the frontend port.
EXPOSE 3500

# Start the React application.
CMD ["node", "index.js"]

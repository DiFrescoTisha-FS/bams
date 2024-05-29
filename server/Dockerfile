# Use a node image
FROM node:16.17.1-alpine3.16

# Create and set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all server files
COPY . .

# Set environment variables
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 4008

# Start the app
CMD ["npm", "start"]

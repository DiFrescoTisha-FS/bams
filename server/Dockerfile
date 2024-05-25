FROM node:20-alpine

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY server .

# Expose port 4008
EXPOSE 4008

# Start the server
CMD ["npm", "start"]

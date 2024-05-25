# Use multi-stage build
# Stage 1: Build the React app
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY client/package*.json ./client/

# Install dependencies
RUN cd client && npm install

# Copy the rest of the files to the working directory
COPY client ./client

# Build the app
RUN cd client && npm run build

# Stage 2: Set up the server
FROM node:20-alpine

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server files
COPY server .

# Copy the built client files
COPY --from=build /app/client/dist ./client/dist

# Expose port 4008
EXPOSE 4008

# Start the server
CMD ["npm", "start"]
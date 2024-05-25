# Use multi-stage build
# Stage 1: Build the React app
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy the client package files
COPY client/package*.json ./client/

# Install client dependencies
RUN cd client && npm install

# Copy the client source files
COPY client ./client

# Build the client app
RUN cd client && npm run build

# Stage 2: Set up the server
FROM node:20-alpine

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy the server package files
COPY server/package*.json ./

# Install server dependencies
RUN npm install

# Copy the rest of the server files
COPY server .

# Copy the built client files from the previous stage
COPY --from=build /app/client/dist ./client/dist

# Expose port 4008
EXPOSE 4008

# Start the server
CMD ["npm", "start"]

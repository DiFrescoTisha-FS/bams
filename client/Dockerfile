# Add a comment to force rebuild
# This is a rebuild trigger
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

# Stage 1: Build the React app
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY client/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client files to the working directory
COPY client .

# Build the app
RUN npm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

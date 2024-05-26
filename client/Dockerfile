# Stage 1: Build the client
FROM node:20-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client files to the working directory
COPY . .

# Build the client app
RUN npm run build

# Stage 2: Serve the client with Nginx
FROM nginx:alpine

# Copy the build output to the Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

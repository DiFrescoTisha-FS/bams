# syntax = docker/dockerfile:1.2
FROM node:20-alpine AS build

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Build the app
RUN npm run build

# Use nginx to serve the build files
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# Stage 1: Build React app
FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app

# Copy client package files
COPY client/package*.json ./client/
WORKDIR /usr/app/client
RUN npm ci

# Copy and build the client app
COPY client/ ./
RUN npm run build

# Stage 2: Set up the server
FROM node:16.17.1-alpine3.16
WORKDIR /usr/app

# Copy server package files
COPY server/package*.json ./server/
WORKDIR /usr/app/server
RUN npm ci

# Copy server files
COPY server/ ./

# Copy client build to server static files directory
COPY --from=build /usr/app/client/dist ./client/dist

# Copy environment files
ARG NODE_ENV=production
COPY server/.env.production .env.production
COPY server/.env .env

# Expose the port
EXPOSE 4008

# Start the server
CMD ["node", "server.js"]

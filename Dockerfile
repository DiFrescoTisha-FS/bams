# Dockerfile

# Stage 1: Build React app
FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Stage 2: Set up the server
FROM node:16.17.1-alpine3.16
WORKDIR /usr/app
COPY server/package*.json ./
RUN npm ci
COPY server/ ./
COPY --from=build /usr/app/dist ./client/dist
EXPOSE 4008
CMD ["node", "server.js"]

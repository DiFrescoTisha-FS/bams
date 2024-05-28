# Dockerfile

# Stage 1: Build React app
FROM node:16.17.1-alpine3.16 as build
WORKDIR /usr/app
COPY client/package*.json ./
RUN npm ci
COPY client/ ./
RUN npm run build

# Stage 2: Set up the server
FROM nginx:1.23.1-alpine
COPY --from=build /usr/app/dist /usr/share/nginx/html
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

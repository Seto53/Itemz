## stage1 as builder
#FROM node:10-alpine as builder
#
## copy the package.json to install dependencies
#COPY package.json package-lock.json ./
#
## Install the dependencies and make the folder
#RUN npm install && mkdir /app && mv ./node_modules ./app
#
#WORKDIR /app
#
#COPY . .
#
## Build the project and copy the files
#RUN npm build
#
#COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
#
### Remove default nginx index page
#RUN rm -rf /usr/share/nginx/html/*
#
#COPY --from=builder /app/build /usr/share/nginx/html
#
#EXPOSE 3000 80
#
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
#
#
##FROM nginx:alpine
##
###!/bin/sh
##
##
##
### Copy from the stahg 1
##COPY --from=builder /app/build /usr/share/nginx/html

# stage1 as builder
FROM node:16-alpine as builder

# copy the package.json to install dependencies
COPY package.json package-lock.json ./

# Install the dependencies and make the folder
RUN npm i && mkdir /frontend && mv ./node_modules ./frontend

WORKDIR /frontend

COPY . .

# Build the project and copy the files
RUN npm run build --prod


FROM nginx:alpine

#!/bin/sh

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stahg 1
COPY --from=builder /frontend/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]




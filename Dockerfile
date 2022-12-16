FROM node:16.15.1 AS build_images

WORKDIR /app

COPY package.json /app/

RUN npm install yarn && yarn install

COPY . .

CMD yarn dev




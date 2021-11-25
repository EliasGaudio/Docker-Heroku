FROM node:11.1.0-alpine

WORKDIR /

COPY . .

RUN npm install

CMD npm start


FROM node:11.1.0-alpine

WORKDIR /home/node

COPY /home/node .

RUN npm install

CMD npm start


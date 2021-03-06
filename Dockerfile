FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY server.js ./
EXPOSE $PORT
CMD [ "node", "server.js" ]

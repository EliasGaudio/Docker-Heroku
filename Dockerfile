FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY server.js ./
EXPOSE 8080
CMD [ "node", "server.js" ]

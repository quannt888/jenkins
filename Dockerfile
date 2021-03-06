FROM node:13-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "node", "server.js" ]
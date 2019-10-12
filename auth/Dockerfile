FROM node:lts-alpine

WORKDIR /app

EXPOSE 3000

ADD package.json package.json
RUN npm install --production

ADD index.js index.js

CMD ["node", "index.js"]

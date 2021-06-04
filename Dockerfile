# install dependencies
FROM node:fermium-alpine
WORKDIR /app-src

COPY package.json package-lock.json ./
COPY index.js ./
RUN npm install

USER node

CMD ["npm", "start"]

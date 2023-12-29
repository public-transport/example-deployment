FROM node:20-alpine
RUN npm i -g pnpm

WORKDIR /app-src

COPY package.json pnpm-lock.yaml ./
COPY index.js ./
RUN pnpm install

USER node

CMD ["pnpm", "run", "start"]

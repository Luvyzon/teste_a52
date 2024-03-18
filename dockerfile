FROM node:latest

WORKDIR /usr/src/api

COPY . .

COPY .env.prod .env

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

RUN npm run migrations:run

RUN npx typeorm query "INSERT INTO users (name, username, password) VALUES ('Admin', 'admin', '$2a$10$x0oXVCQsl4eNSrWSxjBIrOOVyqdS3wVoNyWmA1dabo.lbrnWorBKO')"


CMD [ "npm", "run" ,"start:prod" ]
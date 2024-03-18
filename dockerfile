FROM node:latest

WORKDIR /usr/src/api

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

CMD [ "npm", "run" ,"start:prod" ]
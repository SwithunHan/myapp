FROM node:8

WORKDIR /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
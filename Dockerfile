FROM node

WORKDIR /src/app

COPY package*.json ./

COPY . . 

RUN yarn

EXPOSE 8901

CMD ["yarn", "start"]


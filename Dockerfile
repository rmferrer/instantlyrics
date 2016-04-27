FROM node:5.11

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/package.json
RUN npm cache clean -f && npm install --production >/dev/null2>&1; 

COPY . /usr/src/app

RUN npm install -g webpack; 
RUN webpack --config ./webpack-production.config.js --progress --colors >/dev/null2>&1;

EXPOSE 8080
CMD ["node", "/usr/src/app/server.js"]  
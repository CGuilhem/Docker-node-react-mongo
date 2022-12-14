FROM node:16

#Creating a new directory for app files and setting path in the container
RUN mkdir -p /usr/src/app

#setting working directory in the container
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# ./ pour racine du dossier
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY <source> <destination>
#copying the source code of Application into the container dir
COPY . /usr/src/app

EXPOSE 3000

CMD [ "node", "server.js" ]
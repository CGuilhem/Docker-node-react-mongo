FROM node:18-alpine

WORKDIR /react-vite-app


COPY package*.json ./

RUN npm install --silent

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev"]
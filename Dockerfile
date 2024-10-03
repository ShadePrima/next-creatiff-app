FROM node:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci && npm update

COPY . .

RUN npm run build

CMD ["npm", "start"]

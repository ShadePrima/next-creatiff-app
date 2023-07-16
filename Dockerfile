
FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["sh", "-c", "npm run cypress:run ; stored_exit_code=$? ; npm run report:generate ; exit $stored_exit_code"]

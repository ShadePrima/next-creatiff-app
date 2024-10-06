# Stage 1: Build Stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=build /app .

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]

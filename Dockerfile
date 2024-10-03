# Build Stage
FROM node:18.17-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

# Run both build and export
RUN npm run build-export

# Production Stage
FROM nginx:stable-alpine

COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

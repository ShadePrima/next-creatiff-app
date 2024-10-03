FROM node:18.17-alpine

# Install build tools and dependencies
RUN apk add --no-cache \
  build-base \
  libc6-compat \
  libjpeg-turbo-dev \
  libpng-dev \
  libwebp-dev \
  git

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npx browserslist@latest --update-db

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

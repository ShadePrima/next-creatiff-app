# Выберите версию Node.js
FROM node:16

# Создайте директорию приложения
WORKDIR /app

# Копирование файлов package.json и package-lock.json (если есть)
COPY package*.json ./

# Установите зависимости приложения
RUN npm install

# Скопируйте исходный код приложения
COPY . .

# Строим приложение
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["npm", "start"]

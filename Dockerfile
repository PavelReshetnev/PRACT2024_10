# выбор версии node
FROM node:12

#создание директории приложения
WORKDIR /usr/src/app

# установка зависимостей
# символ ("*") используется для того, чтобы по возможности # скопировать оба файла: package. json и package-lock. json
COPY package*.json ./
RUN npm install

# копируем исходный код
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]

FROM node:20.5

# Установка pnpm
RUN npm i -g pnpm

# Установка MongoDB Docker образа
RUN docker pull mongo:latest

WORKDIR /app

COPY . /app

# Установка зависимостей
RUN pnpm install

# Сборка приложения
RUN pnpm build

# Команда для запуска приложения и MongoDB контейнера
CMD ["sh", "-c", "docker run -d --rm -p 27017:27017 --name mongodb mongo && pnpm dev"]

# Открытие порта для доступа к приложению
EXPOSE 3000


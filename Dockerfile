FROM node:20.5

# Установка pnpm
RUN npm i -g pnpm

WORKDIR /app

COPY . /app

# Установка зависимостей
RUN pnpm install

# Сборка приложения
RUN pnpm build

# Открытие порта для доступа к приложению
EXPOSE 3000

# Команда для запуска приложения
CMD ["pnpm", "dev"]
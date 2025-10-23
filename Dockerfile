# Используйте официальный образ Node.js
FROM node:latest AS builder

# Установите директорию приложения
WORKDIR /app

# Скопируйте файлы проекта
COPY package.json yarn.lock ./

# Установите зависимости через Yarn
RUN yarn install

# Скопируйте остальной код проекта
COPY . .

# Соберите Next.js приложение
RUN yarn build

# Второй этап для продакшн образа
FROM node:latest AS runner
WORKDIR /app

# Скопируйте рабочие зависимости из предыдущего этапа
COPY --from=builder /app/package.json /app/yarn.lock ./
RUN yarn install --production

# Скопируйте собранное приложение из предыдущего этапа
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public
COPY --from=builder /app/next.config.ts /app/next.config.ts

# Порт, на котором будет работать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["yarn", "start"]






# # Use a base Node.js image for building the React app
# FROM node:20-alpine as builder

# # Set the working directory inside the container
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package.json yarn.lock ./

# # Install dependencies
# RUN yarn install

# # Copy the rest of the application code
# COPY . .

# # Build the React application
# RUN yarn build

# # Use a lightweight Nginx image to serve the static files
# FROM nginx:alpine

# # Copy the built React app to Nginx's public directory
# COPY --from=builder /app/build /usr/share/nginx/html

# # Expose the port Nginx listens on (default 80)
# EXPOSE 80

# # Command to start Nginx
# CMD ["nginx", "-g", "daemon off;"]
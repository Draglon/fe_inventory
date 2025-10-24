FROM node:22-alpine as builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]

# # Nginx
# FROM nginx:alpine
# COPY --from=builder /app/build /usr/share/nginx/html
# COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
# # COPY --from=builder nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 3000
# CMD ["nginx", "-g", "daemon off;"]
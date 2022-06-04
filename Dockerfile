FROM node:17

WORKDIR /app
COPY . .

RUN yarn

EXPOSE 8080

CMD ["yarn", "serve"]

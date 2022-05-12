FROM node:latest

WORKDIR /app
COPY . .

RUN yarn

EXPOSE 8080

CMD ["yarn", "serve"]

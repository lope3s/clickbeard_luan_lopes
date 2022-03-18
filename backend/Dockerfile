
# syntax=docker/dockerfile:1
FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn
CMD ["yarn", "start"]
EXPOSE 4000
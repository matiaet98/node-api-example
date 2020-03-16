FROM node:13-alpine
LABEL maintainer="matiaet98"
LABEL version="0.0.1"
WORKDIR /app
COPY . .
RUN npm install
RUN npm ci --only=production
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "./bin/www" ]
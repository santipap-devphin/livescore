FROM node:14-alpine
WORKDIR /usr/app
RUN apk add --update curl tzdata && \
  npm install --global pm2 && \
  cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*
COPY ./package*.json ./
RUN npm install --production
COPY ./ ./
RUN npm run build
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "npm", "--", "start" ]
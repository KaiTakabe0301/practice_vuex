FROM node:12.12.0-alpine

WORKDIR /usr/src/app

RUN apk update && \
    npm install -g @vue/cli \
    npm install -g @vue/cli-service-global \
    npm install -g create-nuxt-app

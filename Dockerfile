FROM node:alpine

WORKDIR '/usr/src/app'

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

# Expose graphql
EXPOSE 3800

CMD [ "yarn", "prod" ]

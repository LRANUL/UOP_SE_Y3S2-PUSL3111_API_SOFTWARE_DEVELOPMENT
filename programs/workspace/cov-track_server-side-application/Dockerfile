FROM node:12-alpine

# install dependencies
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy all local files into the image.
COPY . .

RUN yarn build

EXPOSE 8081

CMD ["yarn", "dev"]

FROM node as build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .

RUN yarn build


FROM simple2b/project-s-api
WORKDIR /home/app
COPY --from=build /app/dist ./static


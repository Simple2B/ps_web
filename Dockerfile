FROM node as build
WORKDIR /app
ARG VITE_API_BASE_URL
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .

RUN yarn build


# FROM atlas-api as prod
#TODO: Add the production image here
WORKDIR /home/pi
COPY --from=build /app/dist ./static


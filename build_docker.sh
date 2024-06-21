#!/bin/bash

IMAGE=simple2b/project-s-web
PLATFORM=linux/amd64,linux/arm64
export API_PORT=7888

# Ensure that the working directory is clean
if [[ $(git status -s) ]]
then
    echo "Working directory is not clean! Please commit all changes before running this script."
    exit 1
fi

# Ensure that the local branch is up to date with the remote branch
git pull

# goto script directory
cd "$(dirname "$0")"

# up api server
docker compose pull
docker compose up -d
sleep 10

# get openapi.json
yarn
yarn get-openapi-json http://localhost:${API_PORT}
if [ $? -ne 0 ]; then
    echo "Error: get openapi.json failed"
    exit 2
fi
# generate api
yarn gen-api
if [ $? -ne 0 ]; then
    echo "Error: generate api failed"
    exit 3
fi

docker compose down

# version patch
yarn version-patch
if [ $? -ne 0 ]; then
    echo "Error: patch version failed"
    exit 1
fi

# get current package version from package.json using node
VERSION=$(node -p "require('./package.json').version")


echo $VERSION

# get major, minor and patch version
MAJOR=$(echo $VERSION | cut -d. -f1)
MINOR=$(echo $VERSION | cut -d. -f2)
PATCH=$(echo $VERSION | cut -d. -f3)

docker buildx build --platform $PLATFORM \
    -t ${IMAGE}:${VERSION} \
    -t ${IMAGE}:${MAJOR}.${MINOR} \
    -t ${IMAGE}:${MAJOR} \
    -t ${IMAGE}:latest \
    .
if [ $? -ne 0 ]; then
    echo "Error: build docker image failed"
    exit 3
fi

docker image push --all-tags ${IMAGE}
if [ $? -eq 0 ]; then
    echo "Success: push docker image success 😃"
    exit 0
else
    echo "Error: push docker image failed 😒"
    exit 4
fi

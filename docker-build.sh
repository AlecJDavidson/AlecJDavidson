#!/bin/bash

# Build docker image
docker build -t alecjdavidson-site .

# Tag the image
docker tag alecjdavidson-site dockerregistry.redtek.dev/alecjdavidson-site

# Push the image
docker push dockerregistry.redtek.dev/alecjdavidson-site

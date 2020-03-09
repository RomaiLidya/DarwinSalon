#!/usr/bin/env bash

WORKDIR=/home/ec2-user/workspace/huijie

# Change CWD
cd ${WORKDIR}

$(aws ecr get-login --no-include-email --region ap-southeast-1)
docker build -f deploy/api/App.Dockerfile -t huijie .

# Tagging the image
docker tag huijie 074976734280.dkr.ecr.ap-southeast-1.amazonaws.com/huijie

sleep 10

# Pushing the image
docker push 074976734280.dkr.ecr.ap-southeast-1.amazonaws.com/huijie

# cleaning the image
docker image prune -f

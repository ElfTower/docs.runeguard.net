#!/usr/bin/env bash

source ./config.sh

./stop.sh 2>/dev/null || true

VERSION=$VERSION WORKING_PATH=$WORKING_PATH docker-compose -f ./docker-compose.yaml up -d
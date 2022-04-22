#!/usr/bin/env bash

source ./config.sh

BUILDKIT_PROGRESS=plain docker build --progress=plain -t ${FULL_NAME}:${VERSION} .

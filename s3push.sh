#!/usr/bin/env bash

VERSION="$(cat ./package.json | jq -r .version)"

aws s3 sync --delete --acl public-read ./build/ s3://runeguard-docs/$VERSION/
aws s3 sync --delete --acl public-read ./build/ s3://runeguard-docs/latest/
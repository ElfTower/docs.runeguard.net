FROM node:16-bullseye-slim

COPY . /app

WORKDIR /app

RUN cd /app && \
    npm install && \
    npm run build

ENTRYPOINT [ "npm", "run", "serve", "--", "--build", "--port", "3000", "--host", "0.0.0.0" ]
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Сервис для отправки сообщения на email
Технологии: NestJS, nodemailer, TypeScript

## Setting .env

```bash
PORT=3000

# mail
MAIL_HOST=smtp.server.ru
MAIL_PORT=465
MAIL_USER=login@domain.com
MAIL_PASSWORD=password
MAIL_FROM=login@domain.com

# optional
MAIL_TRANSPORT=smtp://${MAIL_USER}:${MAIL_PASSWORD}@${MAIL_HOST}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


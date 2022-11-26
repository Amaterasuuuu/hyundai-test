<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Step 1

```
Create .env file at the root of the project and add in to the file next fields:

# app running port
PORT=5000

# data for connection to database
DB_HOST=
DB_NAME=
DB_PORT=
DB_USER=
DB_PASSWORD=

# data for mannualy added client
DEFAULT_EMAIL=
DEFAULT_PASSWORD=
```

## Step 2

```bash
$ npm install
```

## Step 3

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

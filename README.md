# Nodepop API
`Nodepop` is a REST API server implementation built on top `Node.js` and `Express.js` with `Mongoose.js` for `MongoDB` integration.

## Running project

## Manual

You need to have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed.

### MongoDB service start up

```sh
# Go to the installation folder and run
./bin/mongod --dbpath ./data/db --directoryperdb
```

### Install the required packages

```sh
npm install
```

### Run server

```sh
npm start
# alias for
node bin/www
```

### Run server in development mode

```shell
# Install development command
npm i cross-env --save--dev
```

```shell
# To start the application in development mode use:
npm run dev
```

### Run server in cluster mode

```shell
# Start cluster mode
npm run cluster
```

## Create demo data

**In order to have some data, run the following command to initiate the database.**

```shell
# Restart the database with the original demo data:
npm run startUpDB
```

## Register

The first thing you need to do before using the API, is to register to create an account.

Do a POST request sending the following fields:

* email - Enter a valid email
* password - Choose a password
* name - Your name

```sh
http POST /api/users/register email=EMAIL_ENTERED password=PASSWORD_ENTERED name=NAME_ENTERED
```

**After doing this, the API will answer sending a token that need to be send on the body on every request to access the data.**

Answer of the API:

```sh
# Example of API answer with the token
{
    "success": true,
    "message": "User created succesfully",
    "token": "ey2JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWI0MWZkYTk0YTVlNTUzZTQ2NTY4NzEwIiwiaWF0IjoxNTMxMDUxNDMzLCJleHAiOjE1MzExMzc4MzN9.DyvPPmUea7r-M_Sr7hmpSwKSNAVXoFtCkJGKVwpQZo"
}
```

```sh
# Example of request with the token
GET /api/ads?sort=name&fields=name%20-_id&skip=3?token=ACCESS_TOKEN
```

**or add the token to you headers:**

x-access-token : ACCESS_TOKEN

## Log in

If you are already registered, you need to log in with your credentials to get a valid token:

Do a POST request sending the following fields:

* email - Your email
* password - Your password

```sh
http POST localhost:3000/api/users/login email=EMAIL_ENTERED password=PASSWORD_ENTERED
```

After doing this, you will be given an access token as well.

```sh
# Example of API answer with the token
{
    "success": true,
    "token": "ey2JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWI0MWZkYTk0YTVlNTUzZTQ2NTY4NzEwIiwiaWF0IjoxNTMxMDUxNDMzLCJleHAiOjE1MzExMzc4MzN9.DyvPPmUea7r-M_Sr7hmpSwKSNAVXoFtCkJGKVwpQZo"
}
```

## Make Requests

Get the data:

```sh
GET /api/ads?token=ACCESS_TOKEN
```

## Pagination

To paginate results you can use:

```sh
# Skip results
?skip=NUMBER
# Example
GET /api/ads?skip=3&token=ACCESS_TOKEN
```

```sh
# Limit results
?limit=NUMBER
# Example
GET /api/ads?limit=2&token=ACCESS_TOKEN
```

```sh
# Sort results
?sort=FIELD
# Example
GET /api/ads?sort=name&token=ACCESS_TOKEN
```

```sh
# Get only a field
?fields=FIELD
# Get several fields
?fields=FIELD_1 FIELD_2
# Ignore object id
?fields=FIELD_1 -_id
# Example
GET /api/ads?fields=name&token=ACCESS_TOKEN
GET /api/ads?fields=name price&token=ACCESS_TOKEN
GET /api/ads?fields=name -_id&token=ACCESS_TOKEN
```

```sh
# Search by text. The results given are those that starts by the name or matches the same name given in a case insensitive way.
?FIELD_1=TEXT
# Example
GET /api/ads?name=audi&token=ACCESS_TOKEN
```

```sh
# Mixing
You can combine the previous commands
# Example
GET /api/ads?sort=name&fields=name%20-_id&skip=3&limit=10&token=ACCESS_TOKEN
```

## Filter by price

```sh
# Find products with a minimum price
?price=NUMBER-
# Example
GET /api/ads?price=100-&token=ACCESS_TOKEN
```

```sh
# Find products with a maximum price
?price=-NUMBER
# Example
GET /api/ads?price=-100&token=ACCESS_TOKEN
```

```sh
# Find products in price range. NUMBER_1 should be the lowest
?price=NUMBER_1-NUMBER_2
# Example
GET /api/ads?price=100-300&token=ACCESS_TOKEN
```

## Get static content

GET /images/logo.jpg


# Práctica del curso de DevOps

### Ejercicio 1

URL de la API: https://nodepop.jotabustos.com


* Al no servir las imágenes como archivos estáticos, para evaluar que se ha añadido la cabecera X-Owner se debe acceder a https://nodepop.jotabustos.com/images/logo.jpg *

### Ejercicio 2

IP del servidor: 18.209.170.168

## Author

Created and maintained by José Julián Bustos Díaz.
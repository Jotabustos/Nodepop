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

### Create demo data

```shell
# Restart the database with the original demo data:
npm run startUpDB
```

## Sign in

The first thing you need to do before using the API, is to sign in.

Do a POST request sending the following fields:

* email -> Enter a valid email
* password -> Choose a password
* name -> Your name

```sh
http POST localhost:3000/api/users/register email=<email_entered> password=<password_entered> name=<name_entered>
```

**After doing this, you will be granted a token that need to be send on the body on every request to access the data.**

http://localhost:3000/api/ads?sort=name&fields=name%20-_id&skip=3?token=<YOURTOKEN>

**or add the token to you headers:**

x-access-token : <YOURTOKEN>


## Log in

If you are already singed in, to get a valid token: 

Do a POST request sending the following fields:

* email -> Your email
* password -> Your password

```sh
http POST localhost:3000/api/users/login email=<email_entered> password=<password_entered> 
```


## Make Requests

Get the data:

```sh
http http://localhost:3000/api/ads?token=<ACCESS_TOKEN>
```
 
## Pagination

To paginate results you can use:

```sh
# Skip results
?skip=<number>
# Example
http http://localhost:3000/api/ads?skip=3&token=<ACCESS_TOKEN>
```

```sh
# Limit results
?limit=<number>
# Example
http http://localhost:3000/api/ads?limit=2&token=<ACCESS_TOKEN>
```

```sh
# Sort results
?sort=<field>
# Example
http http://localhost:3000/api/ads?sort=name&token=<ACCESS_TOKEN>
```

```sh
# Get only a field
?fields=<field>
# Get several fields
?fields=<field_1> <field_2>
# Ignore object id
?fields=<field_1> -_id 
# Example
http http://localhost:3000/api/ads?fields=name&token=<ACCESS_TOKEN>
http http://localhost:3000/api/ads?fields=name price&token=<ACCESS_TOKEN>
http http://localhost:3000/api/ads?fields=name -_id&token=<ACCESS_TOKEN>
```

```sh
# Search by text. The results given are those that starts by the name or matches the same name given in a case insensitive way.
?<field>=<text>
# Example
http http://localhost:3000/api/ads?name=Audie&token=<ACCESS_TOKEN>
```

```sh
# Mixing
You can combine the previous commands
# Example
http http://localhost:3000/api/ads?sort=name&fields=name%20-_id&skip=3&limit=10&token=<ACCESS_TOKEN>
```

## Filter by price

```sh
# Find products with a minimum price
?price=<number>-
# Example
http http://localhost:3000/api/ads?price=100-&token=<ACCESS_TOKEN>
```

```sh
# Find products with a maximum price
?price=-<number>
# Example
http http://localhost:3000/api/ads?price=-100&token=<ACCESS_TOKEN>
```

```sh
# Find products in price range. <number_1> should be the lowest
?price=<number_1>-number_2>
# Example
http http://localhost:3000/api/ads?price=100-300&token=<ACCESS_TOKEN>
```


## Author

Created and maintained by José Julián Bustos Díaz.
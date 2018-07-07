## Initial setup

Create the express app with:

```shell
express <NameOfTheApp>
```

Follow the instructions given by the script


## Development

### Install development command

```shell
npm i cross-env --save--dev
```

To start the application in development mode use:

```shell
npm run dev
```

## Start MongoDB service

```shell
./bin/mongod --dbpath ./data/db --directoryperdb
```

### MongoDB Client

This application uses MongoDB. To start MongoDB client you can use:

```shell
./bin/mongo
```

The database that we are going to use for the products is:

```shell
use ads
```

### Script to delete the database and insert the data

In order to delete the data inserted in the database and insert new data:

```shell
npm run startUpDB
```


# Use
 
http://localhost:3000/api/ads

## How to paginate the results

To paginate results you can use:

?skip=3 -> To skip the first 3 results

?limit=2 -> To limit the number of results to 2

?sort=name -> To sort the results by name

?fields=name -> To retrieve only the parameter name from the query

?fields=name price -> To retrieve only the parameters name and price from the query

You can also skip parameters from the query by adding a "-" like:

&fields=name price -_id -> By doing this, the _id parameter will not be retrieved

You can also ask for a certain parameter like name or price:

http://localhost:3000/api/ads?name=Audi

* Mixing

You can also mix the query to get a even more precise result by doing for example:

http://localhost:3000/api/ads?sort=name&fields=name%20-_id&skip=3&limit=10
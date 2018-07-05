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
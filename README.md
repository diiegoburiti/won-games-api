# Won Games API

This is the API to create the Won Games Store from [React Avançado course](https://reactavancado.com.br/).

## Requirements

This project uses [Docker](https://www.docker.com/) and our database is [PostgreSQL](https://www.postgresql.org/)

The configuration to the Database can be found on [config/database.js](config/database.js)

## Development

After cloning this project, run the command:

```
docker-compose up -d
```

Wait a few minutes to build the project and the urls to access are:

- `http://localhost:1337/admin` - The Dashboard to create and populate data
- `http://localhost:1337/graphql` - GraphQL Playground to test your queries

The first time to access the Admin you'll need to create an user.

## Populate data

This project uses a `/games/populate` route in order to populate the data via GoG site.
In order to make it work, follow the steps:

- Go to Roles & Permissions > Public and make sure `game:populate` route is public available and the upload as well
- With Strapi running run the following comand in your console:

```bash
$ curl -X POST http://localhost:1337/games/populate

# you can pass query parameters like:
$ curl -X POST http://localhost:1337/games/populate?page=2
$ curl -X POST http://localhost:1337/games/populate?search=simcity
$ curl -X POST http://localhost:1337/games/populate?sort=rating&price=free
```

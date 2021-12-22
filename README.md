Interview task

High level description 
We're going be be standing up a simple CRUD app using NestJS and a sample dataset.  It's going to have a few endpoints to demonstrate the creation of endpoints and queries.  An example dataset is provided in CSV form to populate the database with.  This is a task to demonstrate domain knowledge, derived from an API we stood up in the past for a client but in a much more simpler form.

Phase 1
-Get NestJS setup with your database of choice
-Please use an Entity / Schema definition.  For time purposes you don't need to create multiple tables (unless you want to), one table with all fields is fine.
-Write ingestion function to populate the database, the example file is quite large so first 3k rows should be fine.

Phase 2
-Create an endpoint that allows you to add a new row to the database with a Year + Make + Model + Submodel + Notes + Part Number + Size Code

Phase 3
-Create a module that will serve for car/part lookup
-It should have multiple endpoints
  1. Endpoint returns all years
  2. Endpoint that returns all Makes available for a given Year
  3. Endpoint that returns all Models available for a given Year + Makes combination
  4. Endpoint that returns all Submodels available for a given Year + Makes + Model combination
  5. Endpoint that returns all Notes available for a given Year + Makes + Model + Submodel combination
  6. Endpoint that returns Part Number + Size Code given a Year + Make + Model + Submodel + Notes combination

Bonus Discussion
-Given more time how would you better structure the database?
-The example dataset only covers a certain product.  How would you structure the database if other products were added (say a separate csv, similar format) that contained cars outside of the given set?
-Assuming that the data sets were updated in the future given a similar csv and the csv was sufficiently large like this one (70,000k+ lines), how would you handle subsequent updates to eliminate downtime while the database was being updated?

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

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

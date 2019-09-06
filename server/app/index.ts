import express = require('express');
const graphqlHTTP = require('express-graphql');
const api = require('../src/api/api');
const schema = require('../src/graphql/schema')

const app: express.Application = express();

const rootValue = {
    books: () => api.books,
    countries: () => api.countries
};

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
}));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
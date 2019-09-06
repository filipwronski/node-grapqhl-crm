"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphqlHTTP = require('express-graphql');
var api = require('../src/api/api');
var schema = require('../src/graphql/schema');
var app = express();
var rootValue = {
    books: function () { return api.books; },
    countries: function () { return api.countries; }
};
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: rootValue,
    graphiql: true,
}));
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

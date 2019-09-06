"use strict";
var buildSchema = require('graphql').buildSchema;
var schema = buildSchema("\ntype Book {\n  title: String\n  author: String\n}\ntype Country {\n  name: String\n  population: String\n  inNato: Boolean\n  id: String\n}\ntype Query {\n  books: [Book],\n  countries: [Country],\n}\n");
module.exports = schema;

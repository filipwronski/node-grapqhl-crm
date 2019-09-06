const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Book {
  title: String
  author: String
}
type Country {
  name: String
  population: String
  inNato: Boolean
  id: String
}
type Query {
  books: [Book],
  countries: [Country],
}
`);

module.exports = schema;
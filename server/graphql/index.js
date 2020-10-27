var express = require('express');
var { graphqlHTTP } = require('express-graphql')
let { helloschema, helloroot } = require('./hello.js')
const schematest = require('./schema');
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: helloschema,
  rootValue: helloroot,
  graphiql: true,
}));
app.use('/graphql2', graphqlHTTP({
  schema: schematest,
  graphiql: true,
}));

/* */


module.exports = app
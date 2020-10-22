var express = require('express');
var { graphqlHTTP } = require('express-graphql')
let { helloschema, helloroot } = require('./hello.js')
// import { helloschema, helloroot } from './hello.js'
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: helloschema,
  rootValue: helloroot,
  graphiql: true,
}));

/* */


module.exports = app
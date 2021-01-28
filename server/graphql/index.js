var express = require('express');
var { graphqlHTTP } = require('express-graphql')
let { helloschema, helloroot } = require('./hello.js')
const schematest = require('./schema');
const {userSchema,userRootValue} = require('./newUsers.js');
const app = express();



app.use('/graphql1', graphqlHTTP({
  schema: helloschema,
  rootValue: helloroot,
  graphiql: true,
}));
app.use('/graphql2', graphqlHTTP({
  schema: schematest,
  graphiql: true,
}));

app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  rootValue: userRootValue,
  graphiql: true,
}));

/* */


module.exports = app
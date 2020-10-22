var express = require('express');
const app = express();

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');


var dice = 3;
var sides = 6;
var query = `query RollDice($dice: Int!, $sides: Int) {
  rollDice(numDice: $dice, numSides: $sides)
}`;

app.use('/graphql2', graphqlHTTP({
    schema: query,
    rootValue: { dice, sides },
    graphiql: true,
}));

module.exports = app;
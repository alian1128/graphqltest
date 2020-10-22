var express = require('express');
const app = express();

var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
require('./test.graphql')

// 使用 GraphQL Schema Language 创建一个 schema
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);



// root 提供所有 API 入口端点相应的解析器函数
var root = {
    hello: () => {
        return 'Hello world!';
    },
};


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

/* */





module.exports = app
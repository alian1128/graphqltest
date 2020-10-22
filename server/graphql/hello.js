
var { buildSchema } = require('graphql');
// 使用 GraphQL Schema Language 创建一个 schema
var helloschema = buildSchema(`
  type Query {
    hello: String
  }
`);

// root 提供所有 API 入口端点相应的解析器函数
var helloroot = {
    hello: () => {
        return 'Hello world!';
    },
};

module.exports = { helloschema, helloroot }
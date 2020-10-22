const express = require('express');
const router = express.Router();
const express_graphql = require("express-graphql");

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/test', function (req, res, next) {
  res.send('Hello test');
});



module.exports = router;
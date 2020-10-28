const express = require('express');
const router = express.Router();


//静态页面访问路由
router.get('/', function (req, res, next) {
  res.type('html');
  res.render('index');
});


//车队web相关路由
router.use('/team', require('./teamweb/index.js'))


module.exports = router;
const express = require('express');
const router = express.Router();

const team =  require('./../controller/teamweb/index.js')
const tech = require('./../controller/technology/index.js')

//静态页面访问路由
router.get('/', function (req, res, next) {
  res.type('html');
  res.render('index');
});


//车队web相关路由
router.use('/team',team)

//研发车联网相关路由
router.use('/tech', tech)


module.exports = router;
const express = require('express');
const router = express.Router();
const express_graphql = require("express-graphql");
const fetch = require('node-fetch')
const fetchApi = require('./../fetch.js')
const http = require('./../http.js')

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/test', require('./test.js'));

router.get('/getList', function (req, res, next) {

  // (async () => {
  //   const response = await fetchApi.get('http://sy.smartlink-tech.com.cn:81/smartteam/test/risk/monitor');
  //   console.log(response)
  //   res.json(response)
  // })();

  // fetch('http://sy.smartlink-tech.com.cn:81/smartteam/test/risk/monitor')
  //   .then(re => re.json())
  //   .then(re => {
  //     console.log('re',re);
  //     res.json(re);
  //   }) .catch(err => {
  //     console.log('err',err);
  //     res.json(re);
  //   })

});
router.get('/getListNew', function (req, res, next) {
  http.service.get('http://sy.smartlink-tech.com.cn:81/smartteam/test/risk/monitor').then((response) => {
    res.json(response.data)
  })
}).catch((error) => {
  console.log('getListNew err', err)
  log.error('getListNew err', err);
  res.json({ error: err.code, message: error.message });
});



module.exports = router;
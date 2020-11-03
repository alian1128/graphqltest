const express = require('express');
const router = express.Router();
const log = require('./../../../logs/log.js')
const http = require('./../../http.js')

router.get('/getListNew', function (req, res, next) {
    http.service.get('http://sy.smartlink-tech.com.cn:81/smartteam/test/team/tree').then((response) => {
        res.json(response.data)
    })
        .catch((error) => {
            console.log('getListNew err', error)
            log.error('getListNew err', error);
            res.json({ error: error.code, message: error.message });
        });
});

module.exports = router;
const express = require('express');
const router = express.Router();

const http = require('./../../http.js')

router.get('/getListNew', function (req, res, next) {
    http.service.get('http://sy.smartlink-tech.com.cn:81/smartteam/test/risk/monitor').then((response) => {
        res.json(response.data)
    })
        .catch((error) => {
            console.log('getListNew err', err)
            log.error('getListNew err', err);
            res.json({ error: err.code, message: error.message });
        });
});

module.exports = router;
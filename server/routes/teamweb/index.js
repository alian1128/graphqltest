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
router.post('/posttest', function (req, res, next) {
    console.log('posttest req body', JSON.stringify(req.body))
    log.info('posttest req body', req.body)
    http.service({
        url: 'http://sy.smartlink-tech.com.cn:81/smartteam/test/truck/mil/report/export',
        method: 'post',
        data: req.body
    }
    ).then((response) => {
        res.json(response.data)
    })
        .catch((error) => {
            console.log('posttest err', error)
            log.error('posttest err', error);
            res.json({ error: error.code, message: error.message });
        });
});

module.exports = router;
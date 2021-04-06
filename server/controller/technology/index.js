const express = require('express');
const router = express.Router();
const log = require('./../../../logs/log.js')
const { service } = require('./../../http')
const config = require('./../../../config');
const { param } = require('../teamweb/index.js');
const url = config.API_URL_TECHNOLOGY;

router.get('/getMenu', function (req, res, next) {
    //处理菜单数据.返回category为1的数据
    service.get(url + 'micro-development-user/permission/current', { params: req.query, headers: { 'my-token-key': req.headers['my-token-key'] } })
        .then((re) => {
            const response = re.data;
            log.info('response:', response)
            if (response.code === 200) {
                if (response.data.length > 0) {
                    response.data = response.data.filter((item) => {
                        if (item.child.length > 0) {
                            item.child = item.child.filter((i) => {
                                return i.category === 1
                            })
                        }
                        return item.category === 1
                    })
                }
                res.send(response)

            } else {
                log.error(`getMenu res error, code: ${response.code}, message : ${JSON.stringify(response)}`)
                res.send(response)
            }

        }).catch((error) => {
            log.error(`getMenu error, code: ${error.code}, message : ${error.message}`)
            res.send({ code: error.code, message: error.message })

        });
});
router.get('/getRoleList', function (req, res, next) {
    //处理菜单数据.返回category为1的数据
    console.log('header token:',req.headers['my-token-key'])
    service.get(url + 'micro-development-user/role/list', {
        params: req.query,
        headers: { 'my-token-key': req.headers['my-token-key'] }
    }).then((re) => {
        const response = re.data;
        log.info('response:', response)
        if (response.code === 200) {

            if (response.data && response.data.records.length > 0) {
                let list = []
                response.data.records.forEach((item, index, arr) => {
                    let data = {
                        id: item.id,
                        roleName: item.roleName,
                        createTime: item.createTime,
                        creatorName: item.creatorName
                    }
                    list.push(data);
                })
                response.data.records = list;     
            }
            res.send(response)

        } else {
            log.error(`getRoleList res error, code: ${response.code}, message : ${JSON.stringify(response)}`)
            res.send(response)
        }

    }).catch((error) => {
        log.error(`getRoleList error, code: ${error.code}, message : ${error.message}`)
        res.send({ code: error.code, message: error.message })

    });
});

module.exports = router;
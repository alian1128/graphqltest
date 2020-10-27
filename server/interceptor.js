
const log = require('../logs/log.js')
/* 请求拦截器 */
const interceptor = (req, res, next) => {
    res.result = {
        code: 200,
        data: ""
    }
    log.info("*********请求**********");
    log.info("Authorization: " + req.headers['authorization']);
    log.info("Auth-Token: " + req.headers['auth-token']);
    console.log("Auth-Token: " + req.headers['auth-token']);

    try {
        req.headers['Auth-Token'] = req.headers['auth-token']
        console.log('进入了', req.headers['Auth-Token']);
        const origina_url = req.originalUrl;
        log.info('origina_url', origina_url);
        log.info('req.query', req.query);
        //从header取token，或者从cookie取，或者从url取
        global.Token = req.headers['auth-token']
        next()
    }
    catch (err) {
        log.error('======== NODE 服务器异常 =========');
        log.error(err);
        let errCode = err.statusCode;
        switch (errCode) {
            case 400:
                res.result['code'] = 400;
                break;
            default:
                res.result['code'] = 500;
        }
        next();
    }
}
module.exports = interceptor; 

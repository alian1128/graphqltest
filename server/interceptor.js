
const log = require('../logs/log.js')
// global.log = log;
/* 请求拦截器 */
const interceptor = (req, res, next) => {
    log.info("*********请求开始**********");
    log.info("token: " + req.headers['my-token-key']);
    log.info('origina_url', req.originalUrl);
    log.info('req.query', req.query);
    try {
        next()
    }
    catch (err) {
        log.error('======== NODE 服务器异常 =========');
        log.error(err);
        next();
    }
}

module.exports = { interceptor }; 

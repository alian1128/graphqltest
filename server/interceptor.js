
const log = require('../logs/log.js')
// global.log = log;
/* 请求拦截器 */
const interceptor = (req, res, next) => {
    log.info("*********请求开始**********");
    log.info("Authorization: " + req.headers['authorization']);
    log.info("Auth-Token: " + req.headers['auth-token']);
    log.info('origina_url', req.originalUrl);
    log.info('req.query', req.query);

    try {
        //从header取token，或者从cookie取，或者从url取，针对不同业务，取url
        console.log('token', req.headers['auth-token']);
        // if (req.query && req.query.token) {
        //     global.Token = req.query.token
        // }
        // else 
        // if (req.headers['auth-token']) {
            //车队token规则
            global.Token = req.headers['auth-token']
        // }
        // else if (req.cookies['vue_typescript_admin_access_token']) {
        //     //海外项目token规则
        //     global.Token = req.cookies['vue_typescript_admin_access_token']
        // } else {
        //     global.Token = ""
        // }
        log.info('token:',Token)
        next()
    }
    catch (err) {
        log.error('======== NODE 服务器异常 =========');
        log.error(err);
        next();
    }
}

module.exports = interceptor; 

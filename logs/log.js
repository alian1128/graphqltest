var log4js = require('log4js');
log4js.configure({
    pm2: true,
    appenders: { middleware: { type: 'file', filename: 'logs/middleware.log' } },
    categories: { default: { appenders: ['middleware'], level: 'all' } }
});
var logger = log4js.getLogger('middleware');
module.exports = logger;
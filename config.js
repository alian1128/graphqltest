const log = require('./logs/log.js')
let env = process.env.NODE_ENV;
config = {};
switch (env) {
    case 'test':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://xxx/api/'
        }
        break;
    case 'production':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://xxx/api/'
        }
        break;
    case 'uat':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://xxx/api/'
        }
        break;
    default:
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://xxx/api/'
            // 'API_URL_TECHNOLOGY': 'http://172.29.30.123:18002/'
        }
        break;
}

console.log("config",config)

module.exports = config
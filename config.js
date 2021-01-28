console.log(process.env)
let env = process.env.NODE_ENV,
    config = {};


switch (env) {
    case 'test':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://172.29.30.123:18002/'
        }
    case 'production':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://121.36.29.24/development/api/'
        }
    case 'uat':
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://121.36.29.24/development/api/'
        }
    default:
        //开发启动
        config = {
            'API_URL': '',
            'API_URL_TECHNOLOGY': 'http://121.36.29.24/development/api/'
            // 'API_URL_TECHNOLOGY': 'http://172.29.30.123:18002/'
        }

}



module.exports = config
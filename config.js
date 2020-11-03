console.log(process.env)
let env = process.env.NODE_ENV,
    config = {};


switch (env) {
    case 'test':
        config = {
            'API_URL': ''
        }
    case 'production':
        config = {
            'API_URL': ''
        }
    case 'uat':
        config = {
            'API_URL': ''
        }
    default:
        //开发启动
        config = {
            'API_URL': ''
        }

}



module.exports = config
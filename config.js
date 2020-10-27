console.log(process.env)
let env = process.env.NODE_ENV,
    config = {};


switch (env) {
    case 'test':
        config = {
            'API_URL': ''
        }
    case 'prod':
        config = {
            'API_URL': ''
        }
    case 'dev':
        config = {
            'API_URL': ''
        }
    default:
        config = {
            'API_URL': ''
        }

}



module.exports = config
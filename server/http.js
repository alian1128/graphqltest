const axios = require('axios');
const qs = require('qs');
const log = require('./../logs/log.js')
const service = axios.create({
    baseURL: "", // api的base_url  process.env.BASE_API,,注意局域网访问时，不能使用localhost
    timeout: 30 * 1000 // 请求超时时间
})

service.interceptors.request.use(config => {
    console.log('global.Token', global.Token);
    console.log('config', config);
    console.log('当前请求的url', config.url)
    log.info('当前请求的url', config.url)

    if (global.Token) {
        config.headers['Auth-Token'] = global.Token
    }
    // get 请求数组处理
    if (config.method === 'get') {
        config.paramsSerializer = function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
    return config
}, error => {
    console.log('error:', error) // for debug
    Promise.reject(error)
})

module.exports = { service }
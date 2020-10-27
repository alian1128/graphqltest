const axios = require('axios');
const log = require('./../logs/log.js')
const service = axios.create({
    baseURL: "", // api的base_url  process.env.BASE_API,,注意局域网访问时，不能使用localhost
    timeout: 30 * 1000 // 请求超时时间
})

service.interceptors.request.use(config => {
    config.headers['Auth-Token'] = global.Token;
    console.log('当前请求的url',config.url)
    log.info('当前请求的url',config.url)
    
    return config
}, error => {
    console.log('error:', error) // for debug
    Promise.reject(error)
})

module.exports = { service }
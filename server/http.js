const axios = require('axios');
const qs = require('qs');
const log = require('./../logs/log.js')
const service = axios.create({
    baseURL: "", // api的base_url  process.env.BASE_API,注意局域网访问时，不能使用localhost
    timeout: 30 * 1000 // 请求超时时间
})

service.interceptors.request.use(config => {
    log.info('当前请求的url', config.url)
    log.info('当前请求的headers:', config.headers)
    log.info('当前请求的params:', config.params)
    // get 请求数组处理
    if (config.method === 'get') {
        config.paramsSerializer = function (params) {
            return qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }
    return config
}, error => {
    log.fatal('service error', error)
    Promise.reject(error)
})

service.interceptors.response.use(res => {
    log.info('当前响应的数据:', JSON.stringify(res.data))
    return res;
});


module.exports = { service }
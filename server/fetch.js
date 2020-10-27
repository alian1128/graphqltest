const config = require('./../config.js')
const fetch = require('node-fetch');
// const cookie = require('node-cookie')
class Ajax {
    constructor(baseUrl) {
        this.baseUrl = config.API_URL
        console.log('baseUrl', this.baseUrl);

    }
    /*get请求默认不带参数，参数通过url拼接 */

    get(url, params) {
        let options = {
            method: 'GET',
            body: params,
            headers: { 'Auth-Token': global.Token }
        };
        console.log(options);
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + url, options)
                .then(res => {
                    console.log(res)
                    res.json();
                })
                .then(json => {
                    console.log('请求成功', json)
                    resolve(json)
                })
                .catch(err => {
                    console.log('请求错误', err)
                    reject(err)
                });

        })
    }


    post(url, body) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + url, {
                method: 'post',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(json => {
                    console.log('请求成功', json)
                    resolve(json)
                }).catch((err) => {
                    console.log('请求错误', err)
                    reject(err)
                });

        })
    }

}

module.exports = new Ajax();
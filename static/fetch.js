
class Ajax {
    constructor(baseUrl) {
        this.baseUrl =  '/'
    }
    /*get请求默认不带参数，参数通过url拼接 */
    get(url, config) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + url)
                .then((response) => {
                    if (response.status == 200) {
                        return response
                    }
                })
                .then((data) => {
                    if (config && config.type == 'json') {
                        return data.json()
                    }
                    return data.text()
                }).then((text) => {
                    console.log('请求成功', text)
                    resolve(text)
                }).catch((err) => {
                    console.log('请求错误', err)
                    reject(err)
                })

        })
    }


    post(url, data, config) {
        return new Promise((resolve, reject) => {
            fetch(this.baseUrl + url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then((response) => {
                    if (response.status == 200) {
                        return response
                    }
                })
                .then((data) => {
                    if (config && config.type == 'json') {
                        return data.json()
                    }
                    return data.text()
                }).then((text) => {
                    console.log('请求成功', text)
                    resolve(text)
                }).catch((err) => {
                    console.log('请求错误', err)
                    reject(err)
                })

        })
    }

}

export default new Ajax();
console.log(process.env)
module.exports = config = {
    baseurl: process.env === 'production' ? '/' : '/'
}
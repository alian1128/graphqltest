var { buildSchema, Episode } = require('graphql')

const axios = require('axios')
const log = require('./../../logs/log.js')

const config = require('./../../config')
const url = config.API_URL_TECHNOLOGY

//返回值对象数据结构
const userSchema = buildSchema(`
type Result{
    code:Int
    lastUpdateTime:String
    data:Data,
    payload:String

}
type Data{
    current:Int
    size:Int
    total:Int
    records:[Records]

}
type Records{
    id:               ID
    accountCode:      String
    deptNo:           String
    userPwd:          String
    employeeName:     String
    mobileNumber:        String
    emailAddress:     String
    classOfPositions: String
    jobs:             String
    remarks:          String
    avatar:           String
    userType:         Int
    orderNum:         String
    creatorId:        Int
    createTime:       String
    upStringrId:      Int
    upStringTime:     String
    currentLogTime:   String
    lastLoginTime:    String
    userState:        Int
    organizeFullName: String
    organizeCode:     String
    roleName:         String
    roleId:           Int
    usrStatus:        String
}
type Query {
    getRoleList(token: String!):Result
  }
`)

//数据源

const userRootValue = {
    getRoleList: async ({ token }) => {
        log.info('token', token)
        return await axios.get(url + 'micro-development-user/user/list?token=' + token)
            .then(res => {
                log.info(res.data)
                return res.data
            })
    }
}
module.exports = { userSchema, userRootValue }
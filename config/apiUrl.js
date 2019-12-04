let apiUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
    getAerticleList: apiUrl + 'getAerticleList', // 首页列表数据接口
    getAerticleById: apiUrl + 'getAerticleById/', // 详情页数据接口
    getTypeInfo: apiUrl + 'getTypeInfo' // 头部文章类别跳转接口
}

export default servicePath
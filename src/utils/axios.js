



//axios请求---------------------------------------------------------------
import axios from "axios";
import { Toast } from 'vant'

//公共提交链接
axios.defaults.baseURL = "http://157.122.54.189:9083";
// axios.defaults.baseURL = "http://liangwei.tech:3000";
// token判断是否有token在表头，如果没有则加入------------------------
axios.interceptors.request.use(config => {
    // 要有是否有表头判断，如果没有判断表头，则可能覆盖以后有需要表头的操作
    if (!config.headers.Authorization && localStorage.getItem('token')) {
        // 在表头添加token
        config.headers.Authorization = localStorage.getItem('token')
    }
    return config
})


// 发送请求后的token是否正确，如果错误转跳回登录页--------------------
axios.interceptors.response.use(res => {
    // 拦截器可以拦截到结果 res
    // 记得需要放行
    console.log('路过拦截器, 直接将数据返回');
    // 如果获取的数据 res.data 有 statusCode 而且是 4 开头的三位数
    const errCodePattern = /^4\d{2}$/
    if (errCodePattern.test(res.data.statusCode)) {
        // 弹出错误提示
        Toast.fail(res.data.message || '系统错误')
    }
    //当用户用错误token进入页面需要清除其token并且弹回登录页
    if (res.data.message == "用户信息验证失败") {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        router.replace('/login')
    }
    return res
})


export default axios
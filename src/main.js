import Vue from 'vue'
import App from './App.vue'
import router from './router'






//vant----------------------------------
// 1. 导入组件库
import Vant, { Toast } from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

//axios请求---------------------------------------------------------------
import axios from "axios";
//公共提交链接
axios.defaults.baseURL = "http://157.122.54.189:9083";

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


// 绑定到原型
Vue.prototype.$axios = axios;




Vue.config.productionTip = false
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')



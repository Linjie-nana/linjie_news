import Vue from 'vue'
import App from './App.vue'
import router from './router'

//vant----------------------------------
// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)

//axios请求---------------------------------
import axios from "axios";
// 绑定到原型
Vue.prototype.$axios = axios;




Vue.config.productionTip = false
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')



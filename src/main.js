import Vue from 'vue'
import App from './App.vue'
import router from './router'



import axios from './utils/axios'
// 绑定到原型
Vue.prototype.$axios = axios;


//vant----------------------------------
// 1. 导入组件库
import Vant from 'vant'
// 2. 引入组件 css 文件
import 'vant/lib/index.css'
// 3. 注册 vant ui 组件库的标签
Vue.use(Vant)





Vue.filter('fixImgUrl', (oldUrl) => {
  if (oldUrl.indexOf("http") > -1) {
    return oldUrl;
  } else {
    return axios.defaults.baseURL + oldUrl;
  }
})




// 配置 vuex
// 1. 引入 vuex
import Vuex from 'vuex'
// 2. 注册到 Vue 组件内
Vue.use(Vuex)
// 3. 实例化一个 Vuex 的仓库, 往里添加配置对象
const store = new Vuex.Store({
  // state 是共享状态数据的对象
  state: {
    count: 0,
    count2: 1,

  },
  // mutations 是用来修改数据的函数对象
  mutations: {
    addCount(state, data) {
      // 每个 mutations 函数, 第一个形参都能接收state对象
      state.count += 1
    }

  }
})






Vue.config.productionTip = false
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')



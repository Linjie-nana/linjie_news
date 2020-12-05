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
    historyList: []
  },
  // mutations 是用来修改数据的函数对象
  mutations: {
    addHistory(state, data) {
      // 判断推入进来的数据, 在原数组中不存在
      // 再放入
      if (state.historyList.indexOf(data) === -1) {
        state.historyList.push(data)
      }
    },
    recoverHistory(state, data) {
      state.historyList = data
    }
  }
})





Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')



import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Login from '../views/login.vue'
import Register from '../views/register.vue'
import UserIndex from '../views/userIndex.vue'
import UserUpdate from '../views/userUpdate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/userindex',
    component: UserIndex,
  },
  {
    path: '/userupdata',
    component: UserUpdate,
  }
]

const router = new VueRouter({
  routes
})

export default router

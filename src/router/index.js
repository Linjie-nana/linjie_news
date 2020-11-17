import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Login from '../views/login.vue'
import Register from '../views/register.vue'
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
  }


]

const router = new VueRouter({
  routes
})

export default router

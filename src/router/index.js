import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Login from '../views/login.vue'
import Register from '../views/register.vue'
import UserIndex from '../profile/userIndex.vue'
import UserUpdate from '../profile/userUpdate.vue'
import userFollows from '../profile/userFollows.vue'
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
  },
  {
    path: '/userfollows',
    component: userFollows
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/profile' || to.path == '/userupdata' || to.path == '/userfollows') {
    if (localStorage.getItem('token')) {
      next()
    } else {
      router.push('/login').catch((err) => { })
    }
  } else { next() }
})

export default router

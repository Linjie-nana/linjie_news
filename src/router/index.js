import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


import Login from '../views/login.vue'
import Register from '../views/register.vue'
import UserIndex from '../views/profile/userIndex.vue'
import UserUpdate from '../views/profile/userUpdate.vue'
import userFollows from '../views/profile/userFollows.vue'
import userComment from '../views/profile/userComment.vue'
import articleDetails from '../views/profile/articleDetails.vue'
import userStar from '../views/profile/userStar.vue'
import test from '../views/test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,


  },
  {
    path: '/login',
    component: Login,

  },
  {
    path: '/register',
    component: Register,

  },
  {
    path: '/userindex',
    component: UserIndex,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/userupdata',
    component: UserUpdate,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/userfollows',
    component: userFollows,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/usercomment',
    component: userComment,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/articleDetails',
    component: articleDetails,
  },
  {
    path: '/userStar',
    component: userStar,
    meta: {
      needAuth: true
    }
  },
  {
    path: '/test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  //第一种方法
  // if (to.path == '/profile' || to.path == '/userupdata' || to.path == '/userfollows' || to.path == '/usercomment') {
  //第二种
  if (to.meta.needAuth) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      router.push('/login').catch((err) => { })
    }
  } else { next() }
})

export default router

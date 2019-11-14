import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index'
import hooks from "./hook"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      idx: 0,
      keepAlive:true,//需要缓存
    }
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie/index.vue'),
    meta: {
      idx: 1,
      keepAlive:true,
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/index.vue'),
    meta: {
      idx: 2,
      keepAlive:true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook => {
  router.beforeEach(hook)
})

export default router

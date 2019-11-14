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
    meta:{
      idx:0
    }
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie/index.vue'),
    meta:{
      idx:1
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/index.vue'),
    meta:{
      idx:2
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Object.values(hooks).forEach(hook=>{
  router.beforeEach(hook)
})

export default router

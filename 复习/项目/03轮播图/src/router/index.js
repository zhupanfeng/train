import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('@/views/Movie/index.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

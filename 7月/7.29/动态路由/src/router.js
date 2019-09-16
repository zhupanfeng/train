import Vue from 'vue'
import Router from 'vue-router'
import Detail from "./views/Detail.vue"
import Goodlist from "./views/Goodlist.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
        {
          path:'/goodlist',
          component:Goodlist,
        },
        {
          // path:'/detail/:id',
          path:'/detail/:name/:age',
          component:Detail,
        },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

let defaultRoutes=[
  {
    path:"/",
    name:"home",
    component:Home,
  },
  {
    path:"*",
    component:()=>import("./components/404.vue"),
  }
]

export let authRoutes=[
  {
    path:"/cart",
    name:"cart",
    component:()=>import("./components/menu/cart.vue"),
    children:[
      {
        path:"/cart-list",
        name:"cart-list",
        component:()=>import("./components/menu/cart-list.vue"),
        children:[
          {
            path:"/lottery",
            name:"lottery",
            component:()=>import("./components/menu/lottery.vue"),
          },
          {
            path:"/product",
            name:"product",
            component:()=>import("./components/menu/product.vue"),
          },
        ]
      },
    ]
  },
  {
    path:"/shop",
    name:"shop",
    component:()=>import("./components/menu/shop.vue"),
  },
  {
    path:"/profile",
    name:"profile",
    component:()=>import("./components/menu/profile.vue"),
  },
]

export default new Router({
  mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes:defaultRoutes
})
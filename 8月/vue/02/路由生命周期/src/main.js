import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
 
Vue.config.productionTip = false
 import "bootstrap/dist/css/bootstrap.css"

 router.beforeEach((to,from,next)=>{
   console.log("main中的钩子")
   next()
 })

 router.beforeResolve((to,from,next)=>{
   console.log("beforeResolve...")
   next()
 })

 router.afterEach(()=>{
  console.log("afterEach...")
})

 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

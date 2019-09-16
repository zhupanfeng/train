import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
 
Vue.config.productionTip = false
 import "bootstrap/dist/css/bootstrap.css"

router.beforeEach((to,from,next)=>{

  let flag=to.matched.some(match=>match.meta && match.meta.needLogin)
  let isLogin=localStorage.getItem('login');
  if(flag){
    // 需要登录才能进入
    if(isLogin){
      // 登录过了想去登录页面直接跳转到首页面
      if(to.name=="login"){
        next("/")
      }else{
        // 直接放行
        next()
      }
    }else{
      // 需要登录才能进入，没有登录过直接跳转登录页面
      next("/login")
    }
  }else if(to.name=="login"){
    if(isLogin){
      next("/")
    }else{
      next()
    }
  }else{
    next()
  }


  // // console.log(to)
  // let flag=to.matched.some(match=>match.meta && match.meta.needLogin);
  // // console.log(flag)

  // // 判断是否需要登录才能进入
  // if(flag){
  //   // flag为true表示需要登录才能进入
  //   let isLogin=localStorage.getItem('login');
  //   // 判断是否登录过了
  //   if(isLogin){
  //     // 需要登录才能进入，并且已经登录过了直接放行
  //     next();
  //   }else{
  //     // 需要登录才能进入，没有登录直接跳转登录页面
  //     next('/login');
  //   }
  // }else{
  //   // 不需要登录就能进入直接放行
  //   next();
  // }
})
 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

// 每一次切换路由，beforeEach执行
router.beforeEach(async(to,from,next)=>{
  let isLogin=await store.dispatch('validate')
  // console.log(isLogin)
  // console.log(to)
  // needLogin 表示需要登录才可以访问的路由
  let needLogin=to.matched.some(match=>match.meta.needLogin)
  if(needLogin){
    // 需要登录
    if(isLogin){
      // 登录过了
      next()
    }else{
      next("/login")
    }
  }else{
    // 不需要登录
    if(isLogin && to.path==="/login"){
        next("/");
    }else{
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

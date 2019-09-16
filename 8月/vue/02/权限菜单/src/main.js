import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store.js'
 

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
 import "bootstrap/dist/css/bootstrap.css"

 router.beforeEach(async(to,from,next)=>{
  //  当前是否获取权限
    if(!store.state.hasRules){
      await  store.dispatch("getMenuList")
      let r=await store.dispatch('getAuthRoute');
      router.addRoutes(r);
        next();
    }else{
      // 获取过权限，不再获取
      next();
    }
 })


 new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

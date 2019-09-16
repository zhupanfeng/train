import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Name from './views/Name.vue'
import Version from './views/Version.vue'

Vue.use(Router)

const router= new Router({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      redirect:{path:"/home"}
    },
    {
      path:'/home',
      name:'home',
      components:{
        default:Home,
        name:Name,
        Version:Version
      }
    },
    {
      path:'/login',
      name:"login",
      component:()=>import('./views/Login.vue')
    },
    {
      path:'/profile',
      name:"profile",
      component:()=>import('./views/Profile.vue'),
      meta:{needLogin:true}//路由元信息
    },
    {
      path:'/user',
      name:"user",
      component:()=>import('./views/User.vue'),
      meta:{needLogin:true},
      children:[
        {
          path:"",
          name:"userAdd",
          component:()=>import('./views/UserAdd.vue'),
        },
        {
          path:"list",
          name:"userList",
          component:()=>import('./views/UserList.vue'),
        },
        {
          path:'detail/:id',//使用路径传参路由配置
          // path:'detail',//使用问号
          name:'userDetail',
          component:()=>import('./views/UserDetail.vue'),
          beforeEnter(to,from,next){
            console.log("beforeEnter..."),
            // console.log('xxxx');
            next();
          }
        }
      ]
      
    },
    {
      path:'*',
      name:"404",
      component:()=>import('./views/404.vue')
    },
  ]
})
export default router;

class HistoryRoute{
    constructor(){
        this.current=null;
    }
}
class VueRouter{
    constructor(options){
        // console.log(options)
        this.mode=options.mode||"hash";
        this.routes=options.routes || []
        this.routesMap=this.createMap(this.routes)
        // console.log(this.routesMap)
        this.history=new HistoryRoute()
        this.init();

    }
    init(){
        if(this.mode === "hash"){
            // 使用的是hash路由
            // console.log("使用的是hash路由")
            location.hash ? "" : location.hash="/";
            // console.log(location.hash)//#/
            window.addEventListener("load",()=>{
                this.history.current=location.hash.slice(1)
            // console.log("load--->",this.history.current)
            })
            window.addEventListener("hashchange",()=>{
                this.history.current=location.hash.slice(1)
                // console.log("hashchange--->",this.history.current)
            })
        }else{
            // 使用的是history
            // console.log(location.pathname)
            location.hash ? "" : location.hash="/";
            window.addEventListener("load",()=>{
                this.history.current=location.pathname
                // console.log("load--->",this.history.current)
            })
            window.addEventListener("popstate",()=>{
                this.history.current=location.pathname
                // console.log("popstate--->",this.history.current)
            })
        }
    }
    push(){}
    go(){}
    back(){}
    // createMap 可以把数组解构转换成对象架构
createMap(routes){
    return  routes.reduce((memo,current)=>{
          // memo刚开始是一个空对象
          memo[current.path]=current.component
          return memo;
      },{})
  }
}
// install方法中第一个参数就是Vue构造器
VueRouter.install=function(Vue){
// 当使用Vue.use(Vue.router)时，调用install方法
    Vue.mixin({
        beforeCreate(){
            // this.$options.name获取组件名字
            // console.log(this.$options.name)
            if(this.$options && this.$options.router){
                // 找到根组件 把它挂到_root上
                this._root=this //main根组件
                // 把router实例挂载到_router上面
                this._router=this.$options.router
                Vue.util.defineReactive(this,"xxx",this._router,history)
            }else{
                this._root=this.$parent._root
            }
            Object.defineProperty(this,"$router",{
                get(){
                    return this._root._router;
                }
            })
            Object.defineProperty(this,"$route",{
                get(){
                    return {
                        current:this._root._router.history.current
                    }
                }
            })
        }
    })
    Vue.component("router-link",{
        render(h){
            return <a>router-link</a>
        }
    })
    Vue.component("router-view",{
        render(h){
            let routesMap=this._root._router.routesMap
            console.log(routesMap)
            // let current=this._root._router.history.current;
            // console.log(current)
            return <h1>router-view</h1>
        }
    })
}
export default VueRouter
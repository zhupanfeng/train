// 放一些路由的钩子
import store from "@/store"
import *as types from "@/store/actions-type"
export default{
    cancelToken:(to,from,next)=>{
        // console.log("cancelToken--->",1)
        // 清除所有的请求方法
        store.commit(types.CLEAR_TOKEN)
        next()
    },
    promission:(to,from,next)=>{
        // console.log("permission-->",2)
        next()
    }
}
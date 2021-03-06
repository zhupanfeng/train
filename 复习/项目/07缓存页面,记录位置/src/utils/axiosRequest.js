import axios from "axios"
import {Toast} from "cube-ui"//加载小动画
import store from "@/store"
import *as types from "@/store/actions-type"

// 请求拦截 加token
// 响应拦截 获取数据res.data
// 保证每一次请求的唯一
 

// 封装axios
class AxiosRequest{
    constructor(){
        // this.baseURL=process.env.NODE_ENV!=="production"? "http://localhost:3000/api":"http:api.xxx.com"
        this.baseURL = "http://localhost:3000/api"
        this.timeout=3000;
        // 在当前ajax对象，挂载一个toast
        this.toast=Toast.$create({
            txt:'正在加载中...',
            time:0,
        })
        this.queue={};//保存着请求的url 避免同时点击多次
    }
    // 设置拦截
    setInterceptors(instance,url){
        // 请求拦截
        instance.interceptors.request.use((config)=>{
            // console.log("keepAlive.....")
            // 每次请求带着token
            config.headers.token=localStorage.getItem("token")||"";
            // 后面每一次请求时，得到一个取消请求方法
            let CancelToken=axios.CancelToken;
            // console.log("CancelToken--->",CancelToken)
            // 给config挂载CancelToken对象
            config.CancelToken=new CancelToken(function executor(c){
                // console.log("c--->",c)
                store.commit(types.PUSH_TOKEN,c)
            })
            // 当点击了tabbar时，页面变了，需要调用cancel方法
            // console.log(config)
            if(Object.keys(this.queue).length==0){
                // 显示出loading
                this.toast.show();
            }
            this.queue[url]=url;
            return config;
        },error=>{
            return Promise.reject(error);
        })
        // 响应拦截
        instance.interceptors.response.use((response)=>{
            // console.log("响应拦截")
            // 删除queue中的url
            delete this.queue[url]
            if(Object.keys(this.queue).length===0){
                // 显示出loading
                this.toast.hide()
            }
            if(response.data.code===0){
                return response.data.data;
            }
        },function(error){
            delete this.queue[url]
            if(Object.keys(this.queue).length==0){
                this.toast.hide()
            }
            return Promise.reject(error)
        })
    }
    request(options){
        // instance就可以发出一个请求 返回promise
        let instance=axios.create()// 创建axios实例
        let config={
            ...options,
            baseURL:this.baseURL,
            timeout:this.timeout
        }
        this.setInterceptors(instance,options.url)
        return instance(config)
    }
}

export default new AxiosRequest;


// 用时
// let ax=new AxiosRequest()
// axios.request({url:"/getnews",methods:"post","name":"xx"}).then(data=>{})
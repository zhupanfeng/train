import axios from "axios"
import {Toast} from "cube-ui"//加载小动画

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
        this.queue={};//保存着请求的url
    }
    // 设置拦截
    setInterceptors(instance,url){
        // 请求拦截
        instance.interceptors.request.use((config)=>{
            // console.log("请求拦截")
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
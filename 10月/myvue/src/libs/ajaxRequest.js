import axios from "axios"//封装 一个axios
import store from "../store"//第一次请求时，显示loading
import {getLocal} from "../libs/local"


class AjaxRequest{
    constructor(){
        this.baseURL=process.env.NODE_ENV=="production" ? "/":"http://localhost:3030",
        this.timeout=3000;
        this.queue={};//存放每一次请求
    }

    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    // 封装一个拦截的方法
    setInterceptor(instance,url){
        // 请求拦截
        instance.interceptors.request.use((config)=>{
            config.headers.Authorization=getLocal("token");

            // 第一次请求，显示loading动画 Object.keys把对象转换成数组
            if(Object.keys(this.queue).length===0){
                store.commit('showLoading');
            }
            this.queue[url]=url;
            return config;
        });
        // 响应拦截 res是返回的结果
        instance.interceptors.response.use((res)=>{
            delete this.queue[url]
            if(Object.keys(this.queue).length===0){
                store.commit('hideLoading')
            }
            return res.data;
        })
    }
    request(options){
        // 创建一个axios实例
        let instance=axios.create();
        this.setInterceptor(instance,options.url);//设置拦截
        let config=this.merge(options);
        // axios执行后。返回promise
        return instance(config)
    }
}

export default new AjaxRequest;
import axios from "axios"//封装 一个axios

class AjaxRequest{
    constructor(){
        // 请求的基础路径 生产环境 开发环境
        this.baseURL=process.env.NODE_ENV=="production" ? "/":"http://localhost:3030",
        // 超时时间
        this.timeout=3000;
    }

    merge(options){
        return {...options,baseURL:this.baseURL,timeout:this.timeout}
    }
    // 封装一个拦截的方法
    setInterceptor(instance){
        // 请求拦截
        instance.interceptors.request.use((config)=>{
            config.headers.Authorization="xxx";
            return config;
        });
        // 响应拦截 res是返回的结果
        instance.interceptors.response.use((res)=>{
            return res.data;
        })
    }
    request(options){
        // 创建一个axios实例
        let instance=axios.create();
        this.setInterceptor(instance);
        let config=this.merge(options);
        // axios执行后。返回promise
        return instance(config)
    }
}

export default new AjaxRequest;
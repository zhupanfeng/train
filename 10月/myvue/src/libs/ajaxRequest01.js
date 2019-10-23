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

    // request("user","post","name=z3")
    request(options){
        // 创建一个axios实例
        let instance=axios.create();
        let config=this.merge(options);
        // axios执行后。返回promise
        return instance(config)
    }
}

export default new AjaxRequest;
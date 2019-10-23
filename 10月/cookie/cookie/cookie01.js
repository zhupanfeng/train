const http=require("http");

http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("welcome~")
    }
    // 通过http头，种植cookie
    if(req.url==='/write'){
        // res.setHeader("Set-Cookie","name=wangcai;domain=.wangcai.cn");//域名，默认就是当前域，舌设置就会限制某个域访问
        // res.setHeader("Set-Cookie","name=wangcai;path=/write");//path 默认/根目录下，设置路径后表示只有在这个路径才能访问cookie
        // res.setHeader("Set-Cookie","name=wangcai;max-age=10");//max-age键值对在浏览器保存时间单位为秒，expires表示多久cookie过期单位为天，
        // 如果都不设置，默认为session，表示会话结束即关闭浏览器后cookie失效
        // res.setHeader("Set-Cookie","name=wangcai;expires=2");//
        // res.setHeader("Set-Cookie","name=wangcai;httpOnly=true");//表示只能通过服务器来操作cookie，也不安全

        // 种植多个cookie
        res.setHeader("Set-Cookie",['name=wangcai','age=100'])
        res.end("write Ok~")
        return 
    }

    if(req.url==='/read'){
        // 服务器给浏览器种植了cookie，浏览器再去请求服务器会带着cookie
        // 服务器可以通过req.headers.cookie来得到cookie
        res.end(req.headers.cookie || 'empty');
    }
}).listen(3000);
const http = require("http");

http.createServer((req, res) => {

    let arr=[];

    // 封装一个setCookie
    res.setCookie=function(key,value,options={}){
        let opts=[];

        if(options.domain){
            opts.push(`domain=${options.domain}`);
        }

        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`);
        }

        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`);
        }

        if(options.path){
            opts.push(`path=${options.path}`);
        }

        arr.push(`${key}=${value};${opts.join(";")}`);

        res.setHeader(`Set-Cookie`,arr);
    }

    if(req.url=='/'){
        res.end("welcome");
    }
    if (req.url === '/write') {
        // 给浏览器种植cookie
        // res.setCookie("name","wangcai");
        // res.setCookie("age","100");
        res.setCookie("name","wangcai",{path:'/write',maxAge:1000});

        res.end("write Ok");
        return 
    }
    if (req.url === '/read') {
        res.end(req.headers.cookie || 'empty');
    }
}).listen(3000);
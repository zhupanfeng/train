const http = require("http");
const querystring=require("querystring");

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

    req.getCookie=function(key){
        // console.log(req.headers.cookie);//name=wangcai; age=100
        // console.log(typeof req.headers.cookie);//string
        // console.log(querystring.parse(req.headers.cookie))// { name: 'wangcai; age=100' }
        // console.log(querystring.parse(req.headers.cookie,";"))// { name: 'wangcai', ' age': '100' }
        let obj=querystring.parse(req.headers.cookie,";");//querystring.parse把一个字符串转换成对象
        return obj[key];
    }

    if(req.url=='/'){
        res.end("welcome");
    }
    if (req.url === '/write') {
        res.setCookie("name","wangcai");
        res.setCookie("age","100");

        req.getCookie()
       
        res.end("write Ok");
        return 
    }
    if (req.url === '/read') {
        req.getCookie()
        // res.end(req.headers.cookie || 'empty');
        res.end(req.getCookie("name") || 'empty');
    }
}).listen(3000);
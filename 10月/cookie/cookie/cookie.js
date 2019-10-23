const http = require("http");
const querystring=require("querystring");

const sign=(value)=>{
    return require("crypto").createHmac("sha256","abc").update(value).digest("base64").replace(/\+/g,"")
}

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

        if(options.signed){
            // value=value+"."+"xxxx";

            value=value+'.'+sign(value);
        }

        arr.push(`${key}=${value};${opts.join(";")}`);

        res.setHeader(`Set-Cookie`,arr);
    }

    req.getCookie=function(key,options={}){
        let obj=querystring.parse(req.headers.cookie,";");//querystring.parse把一个字符串转换成对象
        if(options.signed){
            if(obj[key]){
                let [value,s]=obj[key].split('.')
                let newSign=sign(value);
                console.log(newSign,s)
                if(s===newSign){
                    return value
                }else{
                    return undefined;
                }
            }
        }
        return obj[key];
    }
    if (req.url === '/write') {
        // res.setCookie("name","wangcai");
        // res.setCookie("age","100");
        res.end("write Ok");
        return 
    }
    if (req.url === '/read') {
        res.end(req.getCookie("name") || 'empty');
    }

    if(req.url==='/visit'){
        res.setHeader("Content-type","text/plain;charset=utf8")
        let visit=req.getCookie("visit",{signed:true});
        if(visit){
            visit=visit-0+1;
            res.setCookie("visit",visit+"",{httpOnly:true,signed:true});
        }else{
            // 第一次访问
            visit=1;
            res.setCookie("visit","1",{httpOnly:true,signed:true})
        }
        res.end(`当前第${visit}次访问`)
    }
}).listen(3000);
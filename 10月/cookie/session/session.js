const http=require("http");
const querystring=require("querystring")
let uuid=require("uuid");
let cardName="name"

// 先把session存储在内存中 一般存储在数据库中
let session={};

http.createServer((req,res)=>{

    let arr = [];
    res.setCookie = function(key,value,options={}){
        let opts = [];
        if(options.domain){
            opts.push(`domain=${options.domain}`)
        }
        if(options.maxAge){
            opts.push(`max-age=${options.maxAge}`)
        }
        if(options.httpOnly){
            opts.push(`httpOnly=${options.httpOnly}`)
        }
        arr.push(`${key}=${value}; ${opts.join("; ")}`)
        res.setHeader('Set-Cookie', arr);
    }
    req.getCookie = function(key,options = {}){
        let obj = querystring.parse(req.headers.cookie,"; ");
        return obj[key];
    }

    if(req.url==='/eat'){
        let id=req.getCookie(cardName);

        if(id){
            // 有卡
            session[id].money-=100
            res.end("current money is $"+session[id].money)
        }else{
            // 第一次
            let cartId=uuid.v4();
            session[cartId]={money:999}
            res.setCookie(cardName,cartId)
            res.end("current money is ￥500")
        }
        res.end("eat....")
    }
}).listen(3030)
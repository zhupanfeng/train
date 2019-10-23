let express=require("express")
let bodyParser=require("body-parser")
let jwt=require('jsonwebtoken')

let app=express()

// 配置跨域
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET,HEAD,OPTIONS,POST,PUT"),
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept,Authorization")
    if(req.method.toLowerCase()=== "options"){
        return res.end();
    }
    next();
})

// 配置bodyParser
app.use(bodyParser.json())
let secret="xwc"

// 获取用户信息接口
app.get("/user",(req,res)=>{
    setTimeout(()=>{
        res.json({name:"xiaohua"})
    },500)
})

// 登录接口
app.post('/login',(req,res)=>{
    let {username}=req.body;
    if(username==='admin'){
        // 登录成功返回一个token 
        res.json({
            code:0,
            username:'admin',
            token:jwt.sign({username:'admin'},secret,{expiresIn:20})
        })
    }else{
        // 登录失败
        res.json({
            code:1,
            data:"用户名不存在"
        })
    }
})

// 验证token的接口
app.get("/validate",(req,res)=>{
    let token=req.headers.authorization;
    jwt.verify(token,secret,(err,decode)=>{
        if(err){
            return res.json({
                code:1,
                data:"token失效了"
            })
        }else{
            // token合法 在一直浏览情况下，把token失效延长
            res.json({
                code:0,
                username:decode.username,
                token:jwt.sign({username:'admin'},secret,{expiresIn:20})
            })
        }
    })
})
app.listen(3030)
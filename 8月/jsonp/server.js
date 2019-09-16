const express=require("express")

const app=express()

app.get("/newsList",(req,res)=>{
    // res.json({"title":"新闻标题","content":"新闻内容"})
    // 前面想要经过jsonp包装后的数据，那么需要把数据包装
    // jsonp规定 返回一个函数调用 函数名?

    // let cb=req.query.callback;
    // res.send(cb+"("+JSON.stringify({"title":"新闻标题","content":"新闻内容"})+")");

    // 是一种语法糖（上面两行）
    // res.jsonp({"title":"新闻标题","content":"新闻内容"})

    res.jsonp({code:"1",msg:"xxx"})
})

app.listen(3333)

// 跨域限制
// 解决方案：前端接收数据使用jsonp 后端要返回一个函数调用，把数据当做函数的实参
// 返回的callback后面就是函数名 通过req.query.callback得到

// jsonp解决跨域不是ajax发出的请求 script标签中的src发出的请求
 
// 浏览器发现index.html img src link href script
// src href发出二次请求

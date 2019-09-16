const express=require("express")
const path=require("path")
const app=express()

app.use(express.static(path.join(__dirname,"/")))

app.get("/jsonp",(req,res)=>{
    // res.send("alert('hello')")

    let cb=req.query.callback;//得到f1

    // cd("hello")
    // res.send(cb+"('hello')")//返回一个函数调用

    res.send(cb+"("+JSON.stringify({name:"wangcai",age:"10"})+")")//返回一个json数据
})

app.listen(3030)
const express=require("express")
const path=require("path")
const app=express()

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"01-jsonp跨域.html"))
})

app.listen(4444)
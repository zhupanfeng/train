const express=require("express")
const app=express();
app.get("/abc",function(req,res){
    console.log(req.query)
    console.log(req.path)
    res.send("你好 express")
})
app.listen(4000)
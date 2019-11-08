const fs=require("fs")
fs.readFile("./name.txt","utf-8",(err,data)=>{
    fs.readFile(data,"utf-8",(err,data)=>{
        console.log(data)//666
    })
})
// let fs=require("fs")

// function read(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf8",function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }
// read("./name.txt").then(data=>{
//     return read(data)
// }).then(data=>{
//     console.log(data)
// })

const fs=require("fs").promises;
fs.readFile("./name.txt","utf8")
.then(data=>{return fs.readFile(data,"utf8")})
.then(data=>{console.log(data)})
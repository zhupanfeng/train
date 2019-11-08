let fs=require("fs")
// fs.readFile("./name.txt","utf8",function(err,data){
//     console.log(data)
//     fs.readFile(data,"utf8",function(err,data){
//         console.log(data)
//     })
// })

function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf8",function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })
}

// then的链式调用
// 1.then方法会返回一个promise
// 2.如果成功会将成功的结果向外层的下一个then传递


read("./name.txt")
.then(
    data=>{
        // console.log(data)//age.txt
        // read(data)//promise
        // return read(data+"999")//返回一个promise
        // return read(data)
    },
    err=>{}
).then(data=>{console.log(data)},err=>{console.log(err)})
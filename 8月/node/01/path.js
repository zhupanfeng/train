// path 内置模块 系统 核心

// basename extname dirname join resolve
// let path=require("path")
// let r=path.basename("1.js","js")
// // 根据后面条件，拿一个文件文件名
// console.log(r)

// let path=require("path")
// let r=path.extname("1.js")
// console.log(r)
// 得到一个文件扩展名

// let path=require("path")
// let r=path.dirname("a/b/c")//得到一个目录名
// console.log(r)


// let path=require("path")
// let r=path.join(__dirname,"a/b/c")//把两个路径拼起来
// console.log(r)

// let path=require("path")
// let r=path.resolve("a/b/c")
// console.log(r)

// 应用：在服务器端，路径尽量使用绝对路径
// 使用path，得到绝对路径

// 读取一个文件中的内容
let fs=require("fs");
let path=require("path");
 let fileName=path.join(__dirname,"out.txt")
// console.log(fileName)
// f:\5H5\培训\8月\8.14node\out.txt

fs.readFile(fileName,(err,data)=>{
    if(err) return
    console.log(data)
})

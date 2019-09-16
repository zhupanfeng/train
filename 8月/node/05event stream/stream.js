// 流分为:可读流 可写流

// // fs.createReadStream(path[, options])
// // fs.createWriteStream(path[, options])

// const fs=require("fs")
// const path=require("path")

// // 可读流创建后， 不会去读取文件
// let rs=fs.createReadStream(path.join(__dirname,"name.txt"),{
//     flags:"r",// r read
//     highWaterMark:4,//读取几个
//     encoding:null,
//     autoClose:true,//读取完后，需要关闭
//     start:0,//开始索引
//     end:5//接收索引
// })
// // 需要两个事件 data end
// let arr=[]//用来装水
// rs.on("data",function(chunk){
//     arr.push(chunk)
// })
// rs.on("end",function(){
//     // console.log(arr)//[ <Buffer 30 31 32 33>, <Buffer 34 35> ]
//     // console.log( Buffer.concat(arr))//<Buffer 30 31 32 33 34 35>
//     console.log( Buffer.concat(arr).toString())//012345
// })



const fs=require("fs")
const path=require("path")
let rs=fs.createReadStream(path.join(__dirname,"name.txt"),{
    flags:"r",
    highWaterMark:4,
    encoding:null,
    autoClose:true,
    start:0,
    end:5
})
let arr=[]
rs.on("data",function(chunk){
    arr.push(chunk)
    rs.pause()//暂停
})
// end读取完毕后触发
rs.on("end",function(){
    console.log( Buffer.concat(arr).toString())
})

setTimeout(()=>{
    rs.resume()//恢复data事件
},5000)

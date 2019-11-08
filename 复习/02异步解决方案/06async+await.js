// ------------------generator+co解决异步
// let fs=require("fs").promises
// let co=require("co");
// function* read(){
//     let res=yield fs.readFile("./name.txt","utf-8")
//     let res2=yield fs.readFile(res,"utf-8")
//     return res2;
// }
// co(read).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

// ----------------async+await解决异步
// async+await是generator的语法糖
// let fs=require("fs").promises
// async function read(){
//     let res=await fs.readFile("./name.txt","utf-8")
//     let res2=await fs.readFile(res,"utf-8")
//     return res2;
// }
// read().then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

// ------------------
// async+await看上去更像同步代码
// let fs=require("fs").promises
// async function read(){
//     let res=await fs.readFile("./name.txt","utf8")
//     return res
// }
// read().then(data=>{
//     console.log(data)//age.txt
// },err=>{
//     console.log(err)
// })

// ----------------
// 通常await后面跟上Promise
// 如果在await后面跟上一个普通值，它就会包装成Promise
// Promise.resolve("hello")

async function read(){
    let res=await "hello"
    return res
}
read().then(data=>{
    console.log(data)//hello
},err=>{
    console.log(err)
})
// ()=>{}执行器，会立即执行
// 刚创建Promide默认处于Pending状态
// let p=new Promise(()=>{
//     console.log("hello") 
// })


// console.log("start")
// let p=new Promise(()=>{
//     console.log("hello") 
// })
// console.log("end")


// let p=new Promise((resolve,reject)=>{
//     resolve("买包")
// })
// console.log(p)


// let p=new Promise((resolve,reject)=>{
//     resolve("买包")
// })
// p.then(()=>{
//     console.log("成功")
// },()=>{
//     console.log("失败")
// })

// let p=new Promise((resolve,reject)=>{
//     reject("没钱")
// })
// p.then(()=>{
//     console.log("成功")
// },()=>{
//     console.log("失败")
// })

// let p=new Promise((resolve,reject)=>{
//     reject("没钱")
// })
// p.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })


// let p=new Promise((resolve,reject)=>{
//    throw  new Error("没钱")
// })
// p.then((data)=>{
//     console.log(data)
// },(err)=>{
//     console.log(err)
// })

let p=new Promise((resolve,reject)=>{
    throw  new Error("没钱")
 })
 p.then((data)=>{
     console.log(data)
 },(err)=>{
     console.log(err)
 })
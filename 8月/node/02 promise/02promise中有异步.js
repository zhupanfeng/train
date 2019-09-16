// 执行器内部也可以写异步代码
// 只有调用了resolve、reject才会调用then 方法
let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeout")
        // resolve("包")
        reject("没钱")
    },1000)
})
p.then((data)=>{
    console.log(data)
},(err)=>{
    console.log(err)
})
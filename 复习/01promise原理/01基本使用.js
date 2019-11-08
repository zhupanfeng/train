// 在promise中有executor执行器
// 默认创建出来的promise有三种状态 
// pending(等待态) resolve(成功态) reject(失败态)
// promise默认处于等待态
// resolve、reject可以改变状态

// 从等待态到失败态有两种方式:reject() throw new Error()


let promise=new Promise((resolve,reject)=>{
    // console.log("hello")//hello

    // resolve("包")//包
    // reject("没钱")//没钱

    throw new Error("没钱...")//没钱...
})

promise.then((data)=>{console.log(data)},(err)=>{console.log(err)})

// promise是为了解决异步 回调地狱
// 优缺点
// 可以优雅的解决异步问题，异步并发
// 缺点：内部也是基于回调的

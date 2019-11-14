// 基本使用

// promise中有执行器executor
// promise有三种状态：Pending、reject、resolve
// 默认情况下是Pending状态，resolve、reject可以改变状态
// 状态只能从Pending到reject或resolve，不可逆转

// 从等待态到失败态：
// 1、reject()
// 2、throw new Error()


const Promise = require('./02promise')
let promise = new Promise((resolve, reject) => {
  // resolve("包")
  // reject("没钱")
  // throw new Error("没钱")//Error: 没钱

  // 异步
setTimeout(()=>{
  resolve("包")
},1000)

})
promise.then((data) => { console.log(data) }, (err) => { console.log(err) })


    // promise:为了解决异步，可以避免回调地狱
    // 优点：可以较优雅的解决异步，异步并发问题
    // 缺点：内部还是基于回调的




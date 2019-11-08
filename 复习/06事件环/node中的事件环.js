// 浏览器中的JS和node中的JS都是单线程的
// 先执行同步代码 同步代码执行完后清空微任务 再去执行宏任务

// setTimeout(()=>{
//     console.log("timer1")
//     Promise.resolve().then(data=>{
//         console.log("then1")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then2")
//     setTimeout(()=>{
//         console.log("timer2")
//     })
// })
// Promise.resolve().then(data=>{
//     console.log("then3")
// })
// then2 then3 timer1 then1 timer2 浏览器版本
// then2 then3 timer1 timer2 then1   node中的结果（旧版node的结果）


// -------------
// setTimeout setImmediate 执行顺序不确定
// setImmediate(()=>{
//     console.log("setImmediate111...")
// })
// setTimeout(()=>{
//     console.log("setTimeout...")
// })

// ----------
setTimeout(()=>{
    console.log("timer1")
    Promise.resolve().then(data=>{
        console.log("then3")
    })
})
setTimeout(()=>{
    console.log("timer2")
})
Promise.resolve().then(data=>{
    console.log("then1")
})
Promise.resolve().then(data=>{
    console.log("then2")
})
// then1 then2 timer1 then3 timer2

// 方法二 redux中间件原理

// let app={
//     middlewares:[],
//     use(fn){
//         this.middlewares.push(fn)
//     }
// }
// app.use((next)=>{
//     console.log(1)
//     console.log(2)
//     next()
// })
// app.use((next)=>{
//     console.log(3)
//     console.log(4)
//     next()
// })
// app.use((next)=>{
//     console.log(5)
//     console.log(6)
//     next()
// })
// function compose(middlewares){
//   return middlewares.reduceRight(function(a,b){
//         return function(){
//             // 第一次把[Function 5,6]给了a,把[Function 3,4]给了b
//             // 第二次把[Function 1,2]给了b
//         //   return  b(()=>{console.log("...")})
//         b(a)
//         }
//     })
// }
// // 返回一个函数
// let fn=compose(app.middlewares)
// fn();



let app={
    middlewares:[],
    use(fn){
        this.middlewares.push(fn)
    }
}
app.use((next)=>{
    console.log(1)
    console.log(2)
    next()
})
app.use((next)=>{
    console.log(3)
    console.log(4)
    next()
})
app.use((next)=>{
    console.log(5)
    console.log(6)
    next()
})

// function compose(middlewares){
//     return middlewares.reduceRight(function(a,b){
//         return function(){
//             b(a)
//         }
//     })
// }

// 简写

// let fn=compose(app.middlewares)
// fn()
// function compose(middlewares){
//         return middlewares.reduceRight((a,b)=> ()=>b(a))
//     }


// 去掉function 关键字，用=>来代替。如下：
// 只有一个参数，可省()，如下：
// 如有多个形参，或者没有形参，则()不能少，如下：
// 如果只有一句函数体（非return），则可以不写{}：
// 如果只有一句函数体，并它是return语句 ，则return也可以省，{}也可以省：





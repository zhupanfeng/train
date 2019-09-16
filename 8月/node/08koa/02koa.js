const Koa=require("koa")

let app=new Koa()
// 在koa中没有路由只有中间件
// 在koa中没有路由，默认匹配/
// koa中间件默认从上往下执行
// 调用next()，才会运行下面的中间件
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(1)
//     console.log(2)
//     next()
    
// })
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(3)
//     console.log(4)
//     next()
    
// })
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(5)
//     console.log(6)
//     next()
    
// })



// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(1)
//     next()
//     console.log(2)
    
// })
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(3)
//     next()
//     console.log(4)
    
// })
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(5)
//     next()
//     console.log(6)
    
// })
// 1 3 5 6 4 2 遵循洋葱模型

// 等价于如下
// app.use((ctx,next)=>{
//     // ctx.body="hello"
//     console.log(1)
//     // next()
//     ((ctx,next)=>{
//         // ctx.body="hello"
//         console.log(3)
//         // next()
//         ((ctx,next)=>{
//             // ctx.body="hello"
//             console.log(5)
//             next()
//             console.log(6)
            
//         })()
//         console.log(4)
        
//     })()
//     console.log(2)
// })


app.listen(4000)
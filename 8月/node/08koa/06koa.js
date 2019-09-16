const Koa=require("koa")
const app=new Koa()

// app.use(async(ctx,next)=>{
//    console.log(1)
//     await next()
//     console.log(2)
// })
// app.use((ctx,next)=>{
//    setTimeout(
//        function(){
//         console.log(3)
//        }
//    ) 
// })

// 1 2 3






// app.use((ctx,next)=>{
//     // 调用一个中间件，相当于返回一个promise
//     let a=  next()
//      console.log(a)// Promise{'undefined'}  hello

//     //  没有async+await时：Promise{'hello'}
//  })
//  app.use((ctx,next)=>{
//     next()
//     // return 'hello'
//  })



app.use(async(ctx,next)=>{
    // 调用一个中间件，相当于返回一个promise
    let a=await  next()
     console.log(a)// 'undefined'  hello

    // 有async+await时：'hello'
 })
 app.use((ctx,next)=>{
    next()
    return 'hello'
 })


//  写异步就要像写同步代码一样
// 在一个中间件中，利用async+await 仅仅把promise状态转换成普通值
app.listen(4000)
// express中间件原理  koa中间件原理  redux中间件原理

// koa中间件原理

// let app={
//     middlewares:[],
//     use(fn){
//     this.middlewares.push(fn)
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

// // 执行容器中的哪一个方法
// function dispatch(index){
//     if(app.middlewares.length===index) return;
//    let route= app.middlewares[index]
//    route(()=>{dispatch(index+1)})
// }
// dispatch(0)
// console.log(app.middlewares)



let app={
    middlewares:[],
    use(fn){
      app.middlewares.push(fn)
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
function dispatch(index){
    if(app.middlewares.length===index) return;
    let route= app.middlewares[index]
    route(()=>{
        dispatch(index+1)
    })
}
dispatch(0)
// console.log(app.middlewares)
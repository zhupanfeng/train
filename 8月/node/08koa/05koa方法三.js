// 方法三


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
//         return middlewares.reduce(function(a,b){
//             return function(arg){
//                     a(function(){
//                         return b(arg)
//                     })
//             }
//         })
    
// }

function compose(middlewares){
    return middlewares.reduce(function(a,b){
            return function(arg){
                a(function(){
                    return b(arg)
                })
            }
    })
}  

// function compose(middlewares){
//     return middlewares.reduce((a,b)=>(arg)=>a(()=> b(arg)))

// }


let fn=compose(app.middlewares);
fn(()=>{})
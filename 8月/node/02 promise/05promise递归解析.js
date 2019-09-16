let p=new Promise((resolve,reject)=>{
    resolve("hello")
})
let p1=p.then(data=>{
    //  return [1,2,3]
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // 如果在resolve或reject中又是primise，会递归解析，拿到最里面的终值或拒因
            resolve(new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve("666")
                },1000)
            }))
        },1000)
    })
})
p1.then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})
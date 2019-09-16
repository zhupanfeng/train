// let p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("hello")
//     },1000)
// })
// p.then(data=>{
//     return new Promise((resolve,rejext)=>{
//         setTimeout(()=>{
//             resolve("hello")
//         },1000)
//     })
// }).then(data=>{
//     console.log(data)
// })


// let p=new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1=p.then(data=>{
//     return p1
// }).then(data=>{
//     console.log(data)
// })


// let p=new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1=p.then(data=>{
//     return p1
// })
// p1.then(data=>{
//     console.log(data)
// },err=>{
//     console.log("----")
// })


// let p=new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1=p.then(data=>{
//     // return 123
//     return new Error("不Ok")
// })
// p1.then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })

// let p=new Promise((resolve,reject)=>{
//     resolve("hello")
// })
// let p1=p.then(data=>{
//     //  return [1,2,3]
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject("不OK")
//         },1000)
//     })
// })
// p1.then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })
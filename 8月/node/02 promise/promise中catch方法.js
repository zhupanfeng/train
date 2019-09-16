// let p=new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// // .catch是.then的语法糖
// p.then(data=>{},err=>{
//     console.log("1",err)
// }).catch(err=>{
//     console.log("2",err)
// })

// 如果.then中有第二个函数，在这个.then后面又有catch，如果到失败态，会走.then的第二个函数，
// 如果没有就会走catch
// let p=new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{},err=>{
//     console.log("1",err)
// }).catch(err=>{
//     console.log("2",err)
// })

// let p=new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{}).catch(err=>{
//     console.log("2",err)
// })


// 在then第二个函数中return err ，这个err是return到了下一个.then的第一个参数中农
// let p=new Promise((resolve,reject)=>{
//     reject("不OK")
// })
// p.then(data=>{

// },err=>{
//     console.log("------")
//     return err
// }).then(data=>{
//     console.log("data....",data)
// },err=>{
//     console.log("err...",err)
// })

let p=new Promise((resolve,reject)=>{
    // reject("不OK")
    resolve("OK")
})
// 最终，一个promise中，一般在then后面只有一个函数，在then后面有一个catch
// 一般使用then来获取catch
p.then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})

// 在读取时使用绝对路径
// let fs=require("fs")
// let path=require("path")
// let filename=path.join(__dirname,"name.txt")
// fs.readFile(filename,"utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     // console.log(data)
//     fs.readFile(path.join(__dirname,data),"utf8",(err,data)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(data)
//     })
// })


// 封装一个函数，功能是读取一个文件的内容
// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// readFile("./name.txt","utf8").then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })



// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// readFile("./name1.txt","utf8").then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })


// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// // 又回到回调地狱
// readFile("./name.txt","utf8").then(data=>{
//     // console.log(data)
//     readFile(data,"utf8").then(data=>{
//         console.log(data)
//     },err=>{
//         console.log(err)
//     })
// },err=>{
//     console.log(err)
// })


// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// // 在promise中可以练市调用 .then之后还可以.then
// // .then之后返回一个新的promise
// readFile("./name.txt","utf8").then(data=>{
//     // console.log(data)
//     // return false
//     return data
// },err=>{
//     console.log(err)
// }).then(data=>{
//     // console.log(data)
//     return data//return 下面代码不再执行
//     throw new Error("不OK")
// },err=>{

// })
// .then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })


// let fs=require("fs")
// function readFile(...args){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(...args,function(err,data){
//             if(err){
//                 reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// readFile("./name.txt","utf8").then(data=>{
//     return data
// },err=>{
//     // console.log(err)
//     // return err;
// }).then(data=>{
//     // console.log(data)
// },err=>{
//     // console.log(err)
// })
// .then(data=>{
//     // console.log(data)
//     return new Promise((resolve,reject)=>{
//         reject("不OK")
//     })
// },).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
// })


let fs=require("fs")
function readFile(...args){
    return new Promise((resolve,reject)=>{
        fs.readFile(...args,function(err,data){
            if(err){
                reject(err)
            }
            resolve(data)
        })
    })
}
readFile("./name.txt","utf8").then(data=>{
    // return data
    return readFile(data,"utf8")
},err=>{
    return err
}).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})


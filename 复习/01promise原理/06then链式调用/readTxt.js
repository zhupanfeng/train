// let fs=require("fs")
// function read(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf8",function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }

// then的链式调用，上一个.then会返回一个promise
// read("./name.txt")
// .then(data=>{return read(data)},null)
// .then(data=>{console.log(data)},null)//666



// ---------------
// 上一个.then会返回一个promise，
// 但是返回123 hello 
// 内部会把这个写 Promise resolve(123)
// 把123包装成promise

// read("./name.txt") 
// .then(data=>{return "hello"},null)
// .then(data=>{console.log(data)},null)//hello

// read("./name.txt")
// .then(data=>{return 123},null)
// .then(data=>{console.log(data)},null)//123


// 上一个.then需要返回一个promise，如果不是内部会包装成promise
// 返回给下一个.then
// 如果你返回一个普通值，会作为下一个.then的成功的结果
// ----------------


// --------------
// 如果上一个.then返回一个undefined会作为下一个.then的成功结果
// read("./name.txt")
// .then(data=>{return undefined},err=>{console.log("err----->",err)})
// .then(data=>{return data},err=>{console.log("err----->",err)})
// .then(data=>{return data},err=>{console.log("err----->",err)})
// .then(data=>{return data},err=>{console.log("err----->",err)})
// .then(data=>{return data},err=>{console.log("err----->",err)})
// .then(data=>{console.log(data) },err=>{console.log("err----->",err)})//undefined



// read("./name1.txt")
// .then(data=>{return "hello"},err=>{console.log("err1----->",err)})
// .then(data=>{return data},err=>{console.log("err2----->",err)})
// .then(data=>{return data},err=>{console.log("err3----->",err)})
// .then(data=>{return data},err=>{console.log("err4----->",err)})
// .then(data=>{return data},err=>{console.log("err5----->",err)})
// .then(data=>{console.log("data----->",data)},err=>{console.log("err6----->",err)})
// // data-----> undefined

// -----------------
// ------------------

// 如果想要走到下一个.then的失败态的回调函数?
// 1.返回一个失败的Promise
// 2.抛出一个异常

// let fs=require("fs")
// function read(path){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(path,"utf8",function(err,data){
//             if(err) reject(err)
//             resolve(data)
//         })
//     })
// }


// read("./name.txt").then(data=>{
//     return read(data+"lalala")
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
//     // return Promise.reject("没钱")
//     throw new Error("没钱....")
// }).then(data=>{
//     console.log("data---->",data)//data----> undefined
// },err=>{
//     console.log("err-->",err)//err--> 没钱
// })

// ---------------
// 不管上一个.then返回不返回东西，每一个.then都会调用
// 要想在某一个then中，不再想向下继续了，可以返回一个处于Pending态的promise
let fs=require("fs")
function read(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,"utf8",function(err,data){
            if(err) reject(err)
            resolve(data)
        })
    })
}


// read("./name.txt").then(data=>{
//     return read(data+"lalala")
// },err=>{
//     console.log(err)
// }).then(data=>{
//     console.log(data)
// },err=>{
//     console.log(err)
//     return new Promise(()=>{})
// }).then(data=>{
//     console.log("data---->",data)
// },err=>{
//     console.log("err-->",err)
// })



// --------------------
read("./name.txt").then(data=>{
    return read(data+"lalala")
},err=>{
    console.log(err)
}).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
    return false//在err处理函数中返回的数据，也会作为下一个.then成功的结果
}).then(data=>{
    console.log("data---->",data)//data----> false
},err=>{
    console.log("err-->",err)
})


// then可以链式调用，上一个then返回的普通值，无论你是在第一个函数中返回，还是第二个函数返回
// 都会作为下一个then的成功的结果，如果不返回，undefined就会作为下一个then的成功的结果
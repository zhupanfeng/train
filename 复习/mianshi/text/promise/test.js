let Promise=require("./02promise")

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("包")
    },3000)
})
promise.then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})
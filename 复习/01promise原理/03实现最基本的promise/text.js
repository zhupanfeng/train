
// 状态不可逆，一旦成功不可以再改变状态

let Promise=require("./promise")

let promise=new Promise((resolve,reject)=>{
    // resolve("包")
    // reject("没钱")
    throw new Error("没钱...")
}).then(function(data){
    console.log(data)
},function(err){
    console.log(err)
})
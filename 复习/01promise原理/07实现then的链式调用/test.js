let Promise=require("./promise")

let p=new Promise((resolve,reject)=>{
    resolve()
})

let promise2=p.then(()=>{
    // return 123;
    // return {name:"hello"}
    return new Promise((resolve,reject)=>{
        resolve("包")
    })
},err=>{
    console.log(err)
}).then(data=>{
    console.log("data--->",data)
},err=>{
    console.log(err)
})
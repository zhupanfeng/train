// const fs=require("fs")
// fs.readFile("name.txt","utf8",(err,data)=>{
//     console.log(data)
// })
// fs.readFile("age.txt","utf8",(err,data)=>{
//     console.log(data)
// })


// const fs=require("fs")
// let content={};
// fs.readFile("name.txt","utf8",(err,data)=>{
//     content['name']=data
// })
// fs.readFile("age.txt","utf8",(err,data)=>{
//     content['age']=data
//     console.log(content)
// })
// console.log(content)//{}异步


// const fs=require("fs")
// let content={};
// let index=0;
// fs.readFile("name.txt","utf8",(err,data)=>{
//     content['name']=data
//     index++;
//     out()
// })
// fs.readFile("age.txt","utf8",(err,data)=>{
//     content['age']=data
//     index++;
//     out()
// })
// function out(){
//     if(index ==2){
//         console.log(content)
//     }
// }

const fs=require("fs")
let content={};
const after=(times,fn)=>{
    return ()=>{
        if(--times === 0){
            fn()
        }
    }
}
let newAfter=after(2,()=>{
    console.log(content)
})
fs.readFile("name.txt","utf8",(err,data)=>{
    content['name']=data
    newAfter()
})
fs.readFile("age.txt","utf8",(err,data)=>{
    content['age']=data
    newAfter()
})

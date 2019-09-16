// 先订阅 再发布 两者之间没有关系

// const fs=require("fs")
// let content={name:"wangcai",age:10}

// // console.log(  Object.keys(content))//[ 'name', 'age' ]

// // Button.on("click",function(){

// // })

// let e={
//     arr:[],
//     on(fn){
//         this.arr.push(fn)
//     },
//     emit(){
//         this.arr.forEach(fn=>fn())
//     }
// }
// e.on(()=>{
//     Object.keys(content).length === 1
//     // console.log("1",content)
//     console.log("订阅了.....")
// })
// e.on(()=>{
//     Object.keys(content).length === 2
//     // console.log("2",content)
//     console.log("订阅了.....")
// })
// // fs.readFile("name.txt","utf8",(err,data)=>{
// //     content["name"]=data;
// //     e.emit()//发布
// // })
// // fs.readFile("name.txt","utf8",(err,data)=>{
// //     content["age"]=data;
// //     e.emit()
// // })
// e.emit()



// const fs=require("fs")
// let content={name:"wangcai",age:10}

// console.log(  Object.keys(content))//[ 'name', 'age' ]

// Button.on("click",function(){

// })

// let e={
//     arr:[],
//     on(fn){
//         this.arr.push(fn)
//     },
//     emit(){
//         this.arr.forEach(fn=>fn())
//     }
// }
// // e.on(()=>{
// //     Object.keys(content).length === 1
// //     // console.log("1",content)
// // })
// e.on(()=>{
//     Object.keys(content).length === 2
//     console.log("2",content)
// })
// fs.readFile("name.txt","utf8",(err,data)=>{
//     content["name"]=data;
//     e.emit()//发布
// })
// fs.readFile("name.txt","utf8",(err,data)=>{
//     content["age"]=data;
//     e.emit()
// })
// e.emit()



let e={
    arr:[],
    on(fn){
        this.arr.push(fn)
    },
    emit(){
        this.arr.forEach(fn=>fn())
    }
}
e.on(()=>{
    console.log("1")
})
e.on(()=>{
    console.log("2")
})
e.on(()=>{
    console.log("3")
})
e.emit()

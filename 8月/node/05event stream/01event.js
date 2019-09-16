// node 是基于事件驱动的 evets

// let EventEmitter=require("events")//倒出是类大写
// let path=require("path")//模块小写
// let e=new EventEmitter()
// e.on("看报纸",function(){
//     console.log("正在看报纸1...")
// }) 
// e.on("看报纸",function(){
//     console.log("正在看报纸2...")
// })
// e.on("看报纸",function(){
//     console.log("正在看报纸3...")
// })
// e.emit("看报纸")
// e.emit("看报纸")
// e.emit("看报纸")
// e.emit("看报纸")


// let EventEmitter=require("events")//倒出是类大写
// let path=require("path")//模块小写

// // class EventEmitter{
// //     constructor(){
// //         this._events={}
// //     }
// //     on(evenName,callback){
// //         if(this._events[evenName]){
// //             this._events[evenName].push(callback)
// //         }else{
// //             this._events[evenName]= [callback]
// //         }
// //     }
// //     emit(eventName){
// //         this._events[eventName].forEach(fn=>{
// //             fn()
// //         })
// //     }
// // }

// let e=new EventEmitter()
// e.on("看报纸",function(){
//     console.log("正在看报纸1...")
// }) 
// e.on("看报纸",function(){
//     console.log("正在看报纸2...")
// })
// // e.on("吃饭",function(){
// //     console.log("正在吃饭...")
// // })
// // e.emit("吃饭")
//  e.emit("看报纸")
// //  这样取消订阅不可行
//  e.off("看报纸",function(){
//      console.log("取消订阅")
//  })
// e.emit("看报纸")
// // e.emit("看报纸")




// let EventEmitter=require("events")
// let path=require("path")
// let e=new EventEmitter()

// let fun=function(){
//     console.log("正在看报纸1...")
// }
// e.on("看报纸",fun) 
// e.on("看报纸",function(){
//     console.log("正在看报纸2...")
// })
// // e.on("吃饭",function(){
// //     console.log("正在吃饭...")
// // })
// // e.emit("吃饭")
//  e.emit("看报纸")
//  e.off("看报纸",fun)
// e.emit("看报纸")
// // e.emit("看报纸")




let path=require("path")//模块小写

let fun=function(){
    console.log("正在看报纸1...")
}
class EventEmitter{
    constructor(){
        this._events={}
    }
    on(evenName,callback){
        if(this._events[evenName]){
            this._events[evenName].push(callback)
        }else{
            this._events[evenName]= [callback]
        }
    }
    emit(eventName){
        this._events[eventName].forEach(fn=>{
            fn()
        })
    }
    off(evenName,callback){
        this._events[evenName]= this._events[evenName].filter(fn=>{
            return fn!=callback
        })
    }
}

let e=new EventEmitter()
e.on("看报纸",fun) 
e.on("看报纸",function(){
    console.log("正在看报纸2...")
})

e.emit("看报纸")
e.off("看报纸",fun)
e.emit("看报纸")

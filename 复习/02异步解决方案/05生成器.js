// for(let i=0;i<10;i++){} 不太优雅

// es6 iterator 对象 next() {value,done} 需要不停的next

// for of 使用for of 需要这个集合是iterable

// 如何把一个伪数组变成真实数组?

// 1、[...obj] 前提是obj是可迭代的

// 2、使用Array.from

// let obj={
//     0:"a",
//     1:"b",
//     length:2
// }
// // console.log(Array.from(obj))//[ 'a', 'b' ]
// console.length([...obj])//obj is not iterable 需要加上一个迭代器

// -----------------------------生成器

// function* read(){//生成yield
//     yield "hello1"
//     yield "hello2"
//     yield "hello3"
// }
// let it=read();//得到迭代器
// console.log(it.next())//{ value: 'hello1', done: false }
// console.log(it.next())//{ value: 'hello2', done: false }
// console.log(it.next())//{ value: 'hello3', done: false }
// console.log(it.next())//{ value: undefined, done: true }

// --------------生成器
// function* read(){
//     let a=yield "hello1"
//     console.log(a)//2
//     let b=yield "hello2"
//     console.log(b)//3
//     let c=yield "hello3"
//     console.log(c)//4
// }
// // 如何给a,b,c赋值
// let it=read();
// console.log(it.next(1))
// console.log(it.next(2))
// console.log(it.next(3))
// console.log(it.next(4))

// -------------利用生成器解决异步
// let fs=require("fs").promises
// function * read(){
//     // fs.readFile("./name.txt","utf8") promise
//     yield fs.readFile("./name.txt","utf8")
// }
// let it=read()
// // console.log(it.next())//{ value: Promise { <pending> }, done: false }
// let {value,done}=it.next()
// // console.log(value)//Promise { <pending> }
// // console.log(done)//false
// Promise.resolve(value).then(data=>{
//     console.log(data)//age.txt
// })

// ----------------
// let fs=require("fs").promises
// function* read(){
//     yield fs.readFile("./name.txt","utf8")
// }
// let it=read()
// let {value,done}=it.next()//{vale:Promise<pending>,done:false}
// // Promise.resolve(value)//把pending状态变为成功态
// Promise.resolve(value).then(data=>{
//     console.log(data)//age.txt 打印成功后的终值
// })

// -----------------------利用生成器+promise解决异步
// let fs=require("fs").promises
// function* read(){
//     let res=yield fs.readFile("./name.txt","utf8")
//     yield fs.readFile(res,"utf-8")
// }
// let it=read()
// let {value,done}=it.next()
// // 这种写法可能会无限嵌套
// Promise.resolve(value).then(data=>{
//     let {value,done}=it.next(data)
//     Promise.resolve(value).then(data=>{
//         console.log(data)
//     })
// })

// ---------------generator+co
let fs=require("fs").promises
let co=require("co");
function* read(){
    try{
        let res=yield fs.readFile("./name.txt","utf-8")
    let res2=yield fs.readFile(res,"utf-8")
    return res2; 
    }catch(e){
        console.log(e)
    }
}
// 返回Promise
console.log(co(read))
co(read).then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})//666
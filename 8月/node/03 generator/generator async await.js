// generator 生成器 es6中的语法
// 生成器 生成 迭代器


// 生成器可以产生很多只，迭代器只能next一下，拿一个值
// function * read(){
//    yield 1;
// }
// // 调用生成器 生成 迭代器  it就是迭代器
// let it=read()
// console.log(it.next())//{ value: 1, done: false }
// console.log(it.next())//{ value: undefined, done: true }



// function * read(){
//     yield 1;
//     yield 2;
//     yield 3;
//  }
// //  调用read() 返回值是迭代器
//  let it=read()
//  console.log(it.next())//{ value: 1, done: false }
//  console.log(it.next())//{ value: 2, done: false }
//  console.log(it.next())//{ value: 3, done: false }
//  console.log(it.next())//{ value: undefined, done: true }


// function * read(){
//    let a=yield 1;
//    console.log(a)//9
//    let b=yield 2;
//    console.log(b)//9
//    let c=yield 3;
//    console.log(c)//10
   
//  }
//  let it=read()
//  console.log(it.next())//{ value: 1, done: false }
//  console.log(it.next(9))//{ value: 2, done: false }
//  console.log(it.next(10))//{ value: 3, done: false }
//  console.log(it.next(11))//{ value: undefined, done: true }


// function * read(){
//     let a=yield 1;
//     let b=yield 2;
//     let c=yield 3;
    
//   }
//   let it=read()
// //   第一个next没有任何意义
//   it.next()
//   console.log(it.next())


// const fs=require("fs").promises;
// function * read(){
//   yield  fs.readFile("./name.txt","utf-8")
// }
// let it=read()
// //  console.log(it.next())//{ value: Promise { <pending> }, done: false }
//  it.next().value.then(data=>{
//    console.log(data)//age.txt
//  })  


// const fs=require("fs").promises;
// function * read(){
//   let content=yield fs.readFile("./name.txt","utf-8")
//   yield fs.readFile(content,"utf-8")
// }
// let it=read()

// it.next().value.then(data=>{
//   console.log(it.next(data))//{ value: Promise { <pending> }, done: false }
// })


// const fs=require("fs").promises;
// function * read(){
//   let content=yield fs.readFile("./name.txt","utf-8")
//   let age=yield fs.readFile(content,"utf-8")
//   return age
// }
// let it=read()

// it.next().value.then(data=>{
//   it.next(data).value.then(data=>{
//     let r= it.next(data)
//     console.log(r)//{ value: '999', done: true }
//   })
// })


// const fs=require("fs").promises;
// function * read(){
//   let content=yield fs.readFile("./name.txt","utf-8")
//   let age=yield fs.readFile(content,"utf-8")
//   return age
// }
// let co=require("co")
// co(read()).then(data=>{
//   console.log(data)
// })

const fs=require("fs").promises;
async function read(){
  let content=await fs.readFile("./name.txt","utf-8")
  let age=await fs.readFile(content,"utf-8")
  return age
}
read().then(data=>{
  console.log(data)
})
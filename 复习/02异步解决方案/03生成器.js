// generator 生成器 生成迭代器 
// generator一般也是需要和promise配合使用

// generator yield产出
// function * read(){
//     yield "hello"
//     yield "world"
// }
// // 调用generator返回一个iterator
// // it是iterator
// let it=read()
// console.log(it.next())//{ value: 'hello', done: false }
// console.log(it.next())//{ value: 'world', done: false }
// console.log(it.next())//{ value: undefined, done: true }
// console.log(it.next())//{ value: undefined, done: true }

// --------------------------
// let obj={
//     say:function(){

//     },
//     // 对象中放一个generator
//     say1:function*(){

//     },
//     // *say2
// }
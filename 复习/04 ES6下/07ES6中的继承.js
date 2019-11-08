// -------------------ES6中class的基本使用
// class Animal{
//     // es6提供了class
//     constructor(name){
//         // 实例属性
//         this.name=name;
//     }
// }
// let a=new Animal("wangcai")
// console.log(a.name)//wangcai

// --------------ES6模拟抽象类
// class Animal{
//     constructor(name) {
//         if(new.target==Animal){
//             throw new Error("Animal不能new")
//         }
//         // 实例属性
//         this.name=name
//     }
// }
// let a=new Animal("wangcai")
// console.log(a.name)

// ---------------定义共有属性
// class Animal{
//     // age=100 //es7 中提出的草案 babel 在浏览器可以
//     constructor(name){
//         this.name=name
//     }
//     // 共有属性就是原型上的属性
//     say(){
//         console.log("say....")
//     }
// }
// let a=new Animal("wangcai")
// // console.log(a.age)
// console.log(a.hasOwnProperty("name"))//true 实例属性
// console.log(a.hasOwnProperty("say"))//false 共有属性

// -------------访问器
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     // 访问器
//     get age(){
//         return 100
//     }
// }
// let a=new Animal("wangcai")
// console.log(a.age)//100 当成属性来用

// ---------------访问器当做共有属性来用
// class Animal{
//     constructor(name){
//         this.name=name
//     }
//     // 访问器
//     get age(){
//         return 100
//     }
// }
// let a=new Animal("wangcai")
// // console.log(a.age)//100 当成属性来用
// // console.log(a.hasOwnProperty("age"))//false
// // console.log(a.__proto__.hasOwnProperty("age"))//true

// ----------静态属性
class Animal{
    static a=110;
    constructor(name){
        this.name=name
    }
    get age(){
        return 888
    }
}
let a=new Animal("wangcai")
console.log(Animal.a)
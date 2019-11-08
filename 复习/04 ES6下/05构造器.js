// ----------------------普通的构造器 new
// 构造器
// function Animal(){
//     this.type="狗类"
// }
// // a是一个对象 new一个构造器就会创建出一个对象
// let a=new Animal()
// console.log(a.type)//狗类

// ---------------构造器中的属性
// 构造器中的属性分为两类：实例属性和共有属性
// function Person(){
//     // name 叫实例属性
//     this.name="hello"
// }
// p1和p2叫实例 实例属性
// let p1=new Person;
// console.log(p1)//Person { name: 'hello' }
// let p2=new Person;
// console.log(p2)
// ------------

// function Person(name){
//     // name 叫实例属性
//     this.name=name
// }

// let p1=new Person("wangcai");
// console.log(p1)
// let p2=new Person("xiaohua");
// console.log(p2)

// -----------------共有属性

// function Person(name){
//     this.name=name;
// }
// // 共有属性都是定义在原型上
// Person.prototype.say=function(){
//     console.log("say...")
// }
// let p1=new Person("xxx");
// let p2=new Person("jjjj")
// p1.say();//say...
// p2.say();//say...



// 在ES5中创建一个对象，对象中有实例属性和共有属性，实例属性定义在构造器上，共有属性定义在原型上
// ----------------------------hasOwnProperty

// function Person(name){
//     this.name=name
// }
// Person.prototype.say=function(){
//     console.log("say....")
// }

// let p=new Person("hhh");
// console.log(p.name)//hhh
// // hasOwnProperty判断实例属性
// console.log(p.hasOwnProperty("name"))//true 是实例属性在构造器上
// console.log(p.hasOwnProperty("say"))//false 是共有属性在原型上

// ----------------
function Person(name){
    this.name=name
}
Person.prototype.say=function(){
    console.log("say...")
}
let p=new Person("www")
console.log(p.__proto__===Person.prototype)//true
console.log(p.__proto__.hasOwnProperty("say"))//true
console.log(p.constructor===p.__proto__.constructor)//true
console.log(Person.prototype.__proto__)
console.log(p)//Person { name: 'www' }









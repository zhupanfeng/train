// 类型的兼容性

// 类型：基本类型,class interface 兼容

// interface Named{
//     name:string
// }
// class Person{
//     name:string;
//     age:number;
// }
// let p:Named;//定义变量p 它的类型是Named，是一个接口类型
// p=new Person();//p的类型是Named类型还是Person
// console.log(p)//Person {}
// ------------兼容

// -------------------------接口兼容性
// interface Animal{
//     name:string;
//     age:number
// }
// interface People{
//     name:string;
//     age:number;
//     address:string
// }
// function getAnimalName(animal:Animal){
//     return animal.name;
// }
// // let p={name:"wangcai",age:100}
// let p:People={name:'wangcai999',age:99,address:'beijing'}
// let res=getAnimalName(p);
// console.log(res)//wangcai wangcai999

// -----兼容 所谓兼容性就是指需要一个小范围，可以传递一个大范围，此时兼容


// ----------------------------基本类型兼容性
// let n:string|number;
// let k:string="hello";
// n=k;//兼容 

// let n:string
// let k:string|number;
// k=123
// n=k;//不兼容 把大范围的东西给小范围不兼容

// ----------------------类的兼容性
// class Animal{
//     name:string;
// }
// class Dog extends Animal{
//     age:string
// }

// let a:Animal;
// a=new Dog();//兼容

// -----------
// class Animal{
//     name:string;
//     address:string;
// }
// class Demo{
//     name:string;
//     age:string
// }
// let k=Animal;
// k=new Demo();//不兼容

// -----------------------函数兼容性
// 函数：函数的形参和返回值
// 对于函数的兼容性，需要考虑形参兼容性和返回值的兼容性

// ---------------函数形参的兼容性
// function f1(a:number,b:number):number{
//     return a+b;
// }
// // type可以定义一个类型
// type MyFun=(a:number,b:number)=>number;
// let g:MyFun;
// g=f1;//兼容


// ---------对于函数形参的兼容性，少给可以，多给不可以

// function f1(a:number,b:number,c:number):number{
//     return a+b;
// }
// type MyFun=(a:number,b:number)=>number
// let g:MyFun;
// g=f1;//不兼容


// ----------------------函数返回值的兼容性
// {}当成对象 函数的返回值类型是对象
// type GFun=()=>{name:string,age:number}
// let g:GFun;

// function f1(){
//     return {name:"wangcai",age:1000}
// }
// g=f1;//兼容

// ---------------
// type GFun=()=>{name:string,age:number}
// let g:GFun;

// function f1(){
//     return {name:"wangcai",age:1000,address:"beijing"}
// }
// g=f1;//兼容

// -----------------形参类型的兼容性
// 只要其中包含一种类型就兼容
// type GFun=(a:number|string)=>void
// let  g:GFun;
// function f(a:number){
//     console.log(a)
// }
// g=f;//兼容

// -------------
// type GFun=(a:number|string)=>void
// let g:GFun;
// function f(a:number|string|boolean){
//     console.log(a)
// }
// g=f;//兼容

// ------------泛型的兼容性
// interface Demo<T>{
//     name:T
// }
// let x:Demo<string>={name:'wangcai'}
// let y:Demo<number>={name:123}
// x=y;//不兼容

// interface Demo<T>{
//     name:T
// }
// let x:Demo<string>;
// let y:Demo<number>;
// x=y;//不兼容

// 如果是一个空接口,彼此赋值兼容
// interface Demo<T>{
// }
// let x:Demo<string>;
// let y:Demo<number>;
// x=y;//兼容

// --------------
// interface Demo1{
//     name:string
// }
// interface Demo2{
//     name:number
// }
// let a:Demo1;
// let b:Demo2;
// a=b;//不兼容

// ---------------
// interface Demo1{
//     name:string;
// }
// interface Demo2{
//     name:string;
// }
// let a:Demo1;
// let b:Demo2;
// a=b;//兼容


// ----------------枚举的兼容性
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Colors;
// c=123;
// console.log(c)//兼容

// -----------------
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let c:Colors;
// c=Colors.RED;
// console.log(c)//0

// -----------------
// enum Colors{
//     RED,
//     GREEN,
//     BLUE
// }
// let n:number;
// n=Colors.RED;//兼容的





export{}

// 复习
// ts中语法
// 数据类型 number string boolean array tuple any never void null undefined
// 函数 给形参类型 给函数返回值类型
// 类 属性+方法 实例属性和静态属性 实例方法和静态方法
// 抽象类 让子来继承 不能new 抽象方法
// 继承 super()----->父类的constructor

// 接口 (和java中一样) 比抽象类还抽象  子类可以继承接口 通常子类是去实现接口中的抽象方法



// 新学
// 核心原则之一：进行类型检查

// 在ts中接口还有一个功能，对我们的代码或第三方的代码进行类型校验

// -----------------------对 对象 进行类型校验
// 接口中定义的方法都是抽象的

// interface MyObj{
//     name:string;
//     speak():void
// }
// // 对obj进行类型校验，规定obj中有什么类型的数据
// let obj:MyObj={
//     name:"wangcai",
//     speak(){
//         console.log("speak.....")
//     }
// }
// obj.speak();

// --------------可选参数
// name?:string;可选参数

// interface MyObj{
//     name?:string;
//     speak():void
// }
// let obj:MyObj={
//     speak(){
//         console.log("speak....")
//     }
// }

// ---------------------限制矩形只能有width和height
// interface Rect{
//     width:number
//     heigth:number
// }
// let rect:Rect={
//     width:100,
//     heigth:100
// }

// ---------------可以利用接口描述行为的抽象,接口可以继承
// 定义一个接口，接口中有很多抽象的方法
// interface Animal {
//     eat(): void;
//     jump(): void;
//     sleep(): void
// }
// // 一个接口可以继承另一个接口
// interface People extends Animal {
//     study(): void
// }
// class Wc implements People {
//     study() {
//         console.log("学习....")
//     }
//     eat() {
//         console.log("吃.....")
//     }
//     jump() {
//         console.log("跳.....")
//     }
//     sleep() {
//         console.log("睡觉....")
//     }
// }
// let wc=new Wc();
// wc.sleep()

// --------------接口规定某些属性必须有,其他任意
// interface Person{
//     readonly id:number;
//     name:string;
//     [propName:string]:any;//数据是任意数据类型
// }
// let p1:Person={
//     id:1,
//     name:"wangcai",
//     scroll:100,
//     address:"beijing"
// }

// ------------------接口对函数进行校验
// 现在可以定义一个接口对sum函数进行校验
// 这里约束的仅仅是形参列表和函数的返回值
// interface MySum{
//     // 只需要写形参列表和返回值类型
//     // 形参名是不固定的
//     (n:number):number
// }
// let sum:MySum=function (price:number):number{
//     return price*.8
// }

// ------------对函数进行校验(只是校验形参列表和返回值)

// interface SumInterface{
//     (a:number,b:number,c:number):number;
// }
// let sum:SumInterface=function(a:number,b:number,c:number):number{
//     return a+b+c;
// }
// console.log(sum(1,2,3))//6

// ---------------------------arguments
// interface SumInterface{
//     (a:number,b:number,c:number,d:number):number;
// }
// let sum:SumInterface=function():number{
//     // arguments中就收集了实参 伪数组
//     // console.log(arguments)//[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
//     let args:IArguments=arguments
//     // console.log(Array.prototype.slice.call(args))//[ 1, 2, 3, 4 ] 把伪数组变为真数组
//     return Array.prototype.slice.call(args).reduce((val,item)=>val+item,0);
// }
// console.log(sum(1,2,3,4));

// --------------arguments
// interface SumInterface{
//     (...args:any[]):number
//     // let arr:number[]=[1,2,3]
// }
// let sum:SumInterface=function(...args:any[]):number{
//     return args.reduce((val,item)=>val+item,0)
// }
// console.log(sum(1,2,3))//6

// ------------------可索引的接口(约束数组)
// 下面是约束数组的两种方法
// interface ArrInterface{
//     // [index:number]索引是number类型
//     // string 索引对应的值是string
//     [indedx:number]:string
// }
// let arr:ArrInterface=["z3","l4"];
// // let arr1:ArrInterface=[1,2,3];


// -----------------可索引 的接口(约束数组)

// interface ObjInterface{
//     [index:string]:string
// }
// let obj:ObjInterface={"name":"wangcai"}
// let obj1:ObjInterface={name:"wangcai"}

// -----------------------利用接口可以约束类 了解
// class Animal{
//     constructor(name:string){}
// }
// // let a=new Animal("pig")
// // console.log(a)//Animal {}

// interface WithNameClass{
//     // new(name:string) 当成一个对象
//     new(name:string):Animal;
// }
// // class:WithName利用一个接口去约束一个类
// // let a:number=119

// function createClass(clazz:WithNameClass,name:string){
//     return new clazz(name)
// }
// // 当调用createClass时就要创建一个对象，是基于Anmial的对象
// let b=createClass(Animal,"xxxx")
// console.log(b)


// 总结：利用接口对 对象(对象中的数据)和函数进行约束
    // 利用索引接口可以约束对象和数组(索引和索引对应的值)
    // 利用接口去约束类
// 接口:1、让类实现多个接口，接口定义很多抽象方法，实现这些抽象方法
// 2、约束，约束对象，约束函数，约束索引，约束类

export { }
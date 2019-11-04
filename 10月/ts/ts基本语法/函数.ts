// 有函数声明和函数表达式
// 在ts需要给形参和返回值加上类型
// function say(name:string):string{
//     return "hello"+name;
// }
// console.log(say("wangcai"));


// ---------------ts中函数的基本用法

// 函数表达式 在ts中也可以写js
// let say=function(name){
//     return "hello"+name;
// }
// console.log(say("xiaoqiang"))//helloxiaoqiang


// vscode默认就对ts支持比较好
// C# vscode ts 同一个人

// let say=function(name:string):string{
//     return "hello"+name;
// }
// console.log(say("xiaohua"))//helloxiaohua


// ---------------函数的可选参数
// function say(name:string,age?:number):void{
//     // 对于可选来说，如果调用时，没有传递，默认值undefined
//     console.log(name,age)
// }
// // say("wangcai",100)
// say("wangcai")


// ---------------函数默认参数
// function say(name:string="wangcai",age:number=100){
//     console.log(name,age)
// }
// // say()//wangcai 100
// say("xiaoqiang",100)//xiaoqiang 100

// ---------------函数的剩余参数
// function sum(...numbers:Array<number>):void{
//     console.log(numbers)//[ 1, 2, 3, 4, 5 ]
// }
// 实参个数不确定
// sum(1,2,3,4,5)

// ------------------------java函数的重载
// 在C# ，java中都有函数的重载
// 在java中和ts中函数的重载不一样
// 在java中函数的重载表示有多个函数，函数名一样，函数的形参不一样（形参的个数，形参的类型）
// java中函数重载如下
// say表示函数名一样，形参个数不一样，函数重载
// function say(name:string):void{}
// function say(name:string,age:number):void{}

// 函数名一样，形参类型不一样
// function say(name:string):void{}
// function say(name:number):void{}

// say("hello") 
// say("wangcai",100)

// ----------------ts中函数重载（不太正规）
// 在ts中，函数重载仅仅是提供多个函数定义
// 下面三个函数定义就构成了ts函数定义
// let obj={name:"wangcai",age:100}
// function attr(val:string):void;
// function attr(val:number):void;
// function attr(val:any){
//     if(typeof val==="string"){
//         obj.name=val;
//     }else if(typeof val==="number"){
//         obj.age=val;
//     }
// }
// attr("xq");
// attr(666)
// console.log(obj)//{ name: 'xq', age: 666 }


// ------------------------函数类型
// type MySay=(x:string,y:string)=>string
// let say:MySay=function(firstname,lastname){
//     return firstname+lastname
// }
// console.log(say("张","3"))//张3



export{}
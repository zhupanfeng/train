// Any Void Null 和Undefined Never Object


// wc 类型tuple
// let wc:[string,number]=["wangcai",100];
// console.log(wc[0])

// 在枚举中先定义类型，再使用

// Week 定义一个Week类
// enum Week{
//     Monday,
//     Tuesday,
//     Thursday,
//     Friday,
//     Saturday,
//     Sunday
// }
// let today:Week=Week.Monday;
// console.log(today)//0

// Any 任意类型
// let name:any=123;
// name="hello";
// name=true;
// name=undefined;
// 如果一个变量的类型是ANY，那么可以给这个变量赋任何类型的值

// Void 通常作为函数的返回值类型
// 函数返回void ,表示这个函数没有任何返回值

// function sum(num1:number,num2:number):number{
//     return num1+num2;
// }
// console.log(sum(1,2))//3

// function sum(num1:number,num2:number):void{
//      console.log(num1+num2);
// }
// console.log(sum(1,2))//undefined

// null 和Undefined
// null是一个数据类型，这个数据类型对应的值还是null
// let a:null=null;
// console.log(a)//null

// undefined是一种数据类型，这种数据类型的返回值还是undefined
// let a:undefined=undefined;
// console.log(a)//undefined

// 默认情况下null和undefined是所有类型的子类型
// 可以把undefined当做number的子类型
// 可以把undefined赋给number类型的变量

// let age:number=100;
// age=undefined;
// console.log(age)//undefined

// let name="wangcai";
// name=undefined;
// console.log(name)

// let abc:null=null;
// abc=undefined;
// console.log(abc)//undefined

// let abc:undefined=undefined;
// abc=null;
// console.log(abc)//null


// Never 永远不知道类型的类型就是never类型

// function sum():never{
//     // return 1;

//     throw Error("未知错误");
//     // 如果函数一定要抛出一个错误，那么它的返回值就是一个never
// }


// Object 对象类型

// | 给形参指定多种类型

// function sum(x:number|string){
//     if(typeof x=='number'){
//         console.log(x)
//     }else if(x=='string'){
//         console.log(x)
//     }else{
//         console.log(x)
//     }
// }


// 在TS中,把类型分成了两类：

// 1、基本类型
    // number、string、boolean、array、tuple、enum、null、undefined、any、never、void
    // Object

export{}
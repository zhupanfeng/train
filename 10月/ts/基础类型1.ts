// ts 中规定了变量的类型
// string、number、boolean、array、tuple、enum


// 字符串
// let name:string="wangcai";
// console.log(name)

// 数字
// let age:number=11122;
// console.log(age)

// 布尔
// let flag:boolean=true;
// console.log(flag)


// 在ts中给一个变量赋值后，可以重新赋值(同类型)
// let age:number=111;
// age=222;
// console.log(age)

// let age:number=111;
// age="hello";
// console.log(age)

// 定义一个数组，在一个数组中只能放同类型的数据
// let arr:number[]=[1,2,3];
// console.log(arr)

// let arr:string[]=["dd","ss","sf"];
// console.log(arr)

// 数组的第二种写法
// let arr:Array<number>=[1,2,3];
// console.log(arr)

// 元祖 Tuple substr 去掉字符

// let xq:[string,number]=["xiaoqiang",100];
// console.log(xq[0].substr(1))

// let point:[number,number]=[100,200];
// point的类型就是一个元组类型

// 枚举类型，对原有类型的补充

// enum Sex{
//     BOY,
//     GIRL
// }

// let p1:Sex=Sex.BOY;
// console.log(p1)//0

// let p2:Sex=Sex.GIRL;
// console.log(p2)//1


// enum Sex{
//     BOY=10,
//     GIRL=100
// }

// let p1:Sex=Sex.BOY;
// console.log(p1)//10

// let p2:Sex=Sex.GIRL;
// console.log(p2)//100
// 类型断言
// let name:number|string|null;
// name="hello";
// console.log(name.length)//5
// name=110;
// console.log(name)//110
// console.log(name.toFixed(2))//110.00
// // 断言 强行告诉ts是什么类型
// name="hello";
// console.log((name as string).length)//5


// let str:any="hello";
// console.log(str.length)
// //自动推断 编译器自动推断类型为string
// console.log((<string>str).length)//5
// 手动推断类型，不需要编译器推断

// <string> 自动推断两种形式 : <> as

// let x="hello";
// console.log(x);
// console.log(x.toLocaleUpperCase())//HELLO
// 只有对象才能.

export{}
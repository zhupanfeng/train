// 泛类型
// 泛类型就是值没有固定的类型，是什么类型还不确定

// 泛类型，如果一个类中使用泛型，这个类就叫泛型类

// Array是数组，现在要创建一个数组，至于数组中放什么类型数据，还不确定
// <T>表示到时候Array里面放什么类型不确定，T就是一个不确定的类型

// class MyArray<T>{
//     private list:T[]=[];
//     add(ele:T){
//         this.list.push(ele)
//     }
// }
// // 现在创建处理的arr 往里面放number
// let arr=new MyArray<number>();
// arr.add(1)
// arr.add(2)
// arr.add(3)
// console.log(arr)//MyArray { list: [ 1, 2, 3 ] }

// let arr2=new MyArray<string>();
// arr2.add("a")
// arr2.add("b")
// arr2.add("c")
// console.log(arr2)//MyArray { list: [ 'a', 'b', 'c' ] }

// --------------泛类接口
// interface CalInterface{
//     <T>(a:T,b:T):T
// }
// // 现在a和b的类型还不确定 add是函数
// // add:CalInterface 接口约束函数
// // 约束函数的形参和返回值
// let add:CalInterface=function(a,b){
//     return a;
// }
// console.log(add(1,2))
// console.log(add("hello","world"))


// --------------------多个泛型
// 不借助中间变量来交换两个变量的值
// function swap(a:number,b:string){
// }
// swap(1,"a")

// function swap<A,B>(tuple:[A,B]):[B,A]{
//     return [tuple[1],tuple[0]];
// }
// console.log(swap([1,"a"]))//[ 'a', 1 ]

// ----------------------------默认泛型
// 就是先给泛型指定一个默认的数据类型 T=number
// function createArray<T=number>(length:number,value:T):T[]{
//     let arr:T[]=[];
//     for(let i=0; i<length;i++){
//         arr[i]=value;
//     }
//     return arr;
// }
// let arr=createArray(3,"a")
// console.log(arr)//[ 'a', 'a', 'a' ]


// -------------泛型继承一个构造器
// function loger<T>(val:T){
//     console.log(val)//abc
// }
// loger("abc")

// T extends String 表示你传递的类型都应该是String的子类
// 泛型继承一个构造器
// function loger<T extends String>(val:T){
//     console.log(val)
// }
// loger("abc")
// loger(123)//报错

// ------------------利用泛型接口约束对象
// 泛型接口
// interface Cart<T>{
//     list:T[]
// }
// let cart:Cart<number>={list:[1,2,3]};

// interface Person{
//     name:string
// }
// let p:Person={name:"wangcai"}

// ------------------泛型别名
// 通过type来定义

// type Cart<T>={list:T[]} | T[]
// let c1:Cart<number>={list:[1,2,3]}
// let c2:Cart<string>=["a","b","c"];
// console.log(c1)//{ list: [ 1, 2, 3 ] }
// console.log(c2)//[ 'a', 'b', 'c' ]




export{}
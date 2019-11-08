// Set 里面存储任何东西 里面的数据是唯一的

// 创建一个Set
// let set=new Set();//空的Set
// console.log(set)//Set {}

// 创建一个有内容的Set
// let s=new Set([1,2,3])
// console.log(s)//Set { 1, 2, 3 }


// 存储任何类型
// let s= new Set([1,2,"hello",undefined,null,function(){}])
// console.log(s)//Set { 1, 2, 'hello', undefined, null, [Function] }

// Set中不能存储相同的值，可以用来去重
// let s=new Set([1,2,2,2,3,4])
// console.log(s)//Set { 1, 2, 3, 4 }

// Set中的api
// let s=new Set([1,2,3])
// s.add(8)
// console.log(s)//Set { 1, 2, 3, 8 }
// s.delete(1)
// console.log(s)//Set { 2, 3, 8 }
// s.clear()
// console.log(s)//Set {}

// 遍历一个Set
// let s=new Set([1,2,3])
// // s.forEach(item=>console.log(item))//1 2 3
// // console.log(s.entries())//[Set Iterator] { 1, 2, 3 }
// for(value of s.entries()){
//     console.log(value)

// // [ 1, 1 ]
// // [ 2, 2 ]
// // [ 3, 3 ]
// }

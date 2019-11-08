// let [a,b,c]=[1,2,3]
// console.log(a,b,c)//1 2 3

// let [,b,c]=[1,2,3]
// console.log(b,c)// 2 3

// ...args 剩余参数
// let [a,...args]=[1,2,3];
// console.log(a,args)//1 [ 2, 3 ]

// 展开运算符
// let arr=[1,2,3];
// let newArr=[...arr]
// console.log(newArr)//[ 1, 2, 3 ]


// 解构不一样
// let {a,b,c}=[1,2,3]
// console.log(a,b,c)//undefined undefined undefined

// 解构赋值两侧的解构一般情况必须一样，但是在得到一些隐藏参数时，两侧解构可以不一样，
// let {length}=[1,2,3];
// console.log(length)//3

// 如果是对象，解构赋值要保证key一样
// let {a,b}={name:"wangcai",age:100}
// console.log(a)//undefined
// console.log(b)//undefined

// let {name,age}={name:"wangcai",age:100}
// console.log(name)//wangcai
// console.log(age)//100

// 给key起别名
// let {name:a,age:b}={name:"wangcai",age:100}
// console.log(a)//wangcai
// console.log(b)//100


// 深copy [] {}
function deepClone(obj){
    // 去掉一些特殊情况
    if(obj==null) return obj;//去掉null undefined
    if(typeof obj!="object") return obj;//去掉number boolean string
    if(obj instanceof Date) return new Date(obj);//去掉日期对象
    // obj还可以是其他值 正则
    // {} []是Object
    // console.log(obj)//{ name: 'wangcai', age: 100 } [ 1, 2, 3 ]

    // Object Array constructor
    // console.log(obj.constructor)//[Function: Array]
    // console.log(obj.constructor)// [Function: Object]

    let newObj=new obj.constructor
    // console.log(newObj)//[] {}
    for(let key in obj){
        // for in 可以循环[]或者{}
        newObj[key]=obj[key]
    }
    return newObj
}


// let obj={name:"wangcai",age:100}
let obj=[1,2,3]

// let obj=function (){}
// let obj=new Date()
// let obj=null

let newObj=deepClone(obj)
newObj[0]=888;
console.log(obj)//[ 1, 2, 3 ]
console.log(newObj)//[ 888, 2, 3 ]

// let a;
// let b=null;
// console.log(a==b)//true

// let a={};
// console.log(typeof a)//object
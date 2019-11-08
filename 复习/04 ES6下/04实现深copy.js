// function deepClone(obj,hash=new WeakMap){
//     if(obj==null) return obj;//null undefined
//     if(typeof obj!="object") return obj;//string boolean number
//     if(obj instanceof Date) return new Date(obj);//日期
//     if(obj instanceof RegExp) return new RegExp(obj);//正则
//     // 先判断hash中有没有，如果有直接返回
//     if(hash.has(obj)){
//         return hash.get(obj)
//     }
//     let newObj=new obj.constructor//得到实例 是object或者Array
//     hash.set(obj,newObj)//制作一个映射表
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){//不去copy原型链上的属性，copy它自己的属性
//             newObj[key]=deepClone(obj[key],hash)
//         }
//     }
//     return newObj
// }
// let obj={}
// obj.b=obj;
// let a={name:"wangcai",age:obj}//超过最大调用堆栈大小
// console.log(deepClone(a))//{ name: 'wangcai', age: { b: [Circular] } }

// let obj={};
// obj.a=obj;
// console.log(obj)//{ a: [Circular] }

// function deepClone(obj,hash=new WeakMap()){
//     if(obj==null) return obj;
//     if(typeof obj!="object") return obj;
//     if(obj instanceof Date) return new Date(obj);
//     if(obj instanceof RegExp) return new RegExp(obj);
//     if(hash.has(obj)){
//         return hash.get(obj);
//     }
//     let newObj=new obj.constructor;
//     hash.set(obj,newObj)
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             newObj[key]=deepClone(obj[key],hash)
//         }
//     }
//     return newObj
// }

// let obj={}
// obj.b=obj;
// let a={name:"wangcai",age:obj}
// console.log(deepClone(a))


function deepClone(obj,hash=new WeakMap()){
    if(obj==null) return obj;
    if(typeof obj!="object") return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(hash.has(obj)){
        return hash.get(obj)
    }
    let newObj=new obj.constructor;
    hash.set(obj,newObj)
    for(key in obj){
       if(obj.hasOwnProperty(key)){
        newObj[key]=deepClone(obj[key],hash)
       }
    }
    return newObj;
}



let obj={};
obj.b=obj;
let a={name:"nnn",age:obj};
console.log(deepClone(a))






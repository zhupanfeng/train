function deepClone(obj){
    if(obj==null) return obj;
    if(typeof obj!=="object") return obj;
    if(obj instanceof Date) return new Date(obj)
    let newObj=new obj.constructor
    for(let key in obj){
        newObj[key]=obj[key]
    }
    return newObj
}



// let obj=[1,2,3]
// let newObj=deepClone(obj)
// obj[0]=888
// console.log(obj)//[ 888, 2, 3 ]
// console.log(newObj)//[ 1, 2, 3 ]

let obj={name:"zhangsan",age:100}
let newObj=deepClone(obj)
obj.age=888
console.log(obj)//{ name: 'zhangsan', age: 888 }
console.log(newObj)//{ name: 'zhangsan', age: 100 }
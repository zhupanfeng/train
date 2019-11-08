function deepClone(obj){
    if(obj==null) return obj;
    if(typeof obj!="object") return obj;
    if(obj instanceof Date) return new Date(obj);
    let newObj=new obj.constructor
    for(key in obj){
        if(obj.hasOwnProperty(key)){
            // 递归
            // newObj[key]=obj[key]
            newObj[key]=deepClone(obj[key])
        }
    }
    return newObj
}



// let obj=[1,2,3]
// let newObj=deepClone(obj)
// obj[0]=888
// console.log(obj)
// console.log(newObj)


// 当有多层时，还是浅copy 需要递归
let obj={name:'nnn',age:{number:888}}
let newObj=deepClone(obj)
obj.age.number=999
console.log(obj)
console.log(newObj)



// hasOwnProperty不能取得原型链上的属性
// let a={name:'wangcai',age:100}
// console.log(a.hasOwnProperty('name'))//true

// let a={name:'wangcai',age:100}
// console.log(a.hasOwnProperty("toString"))//false
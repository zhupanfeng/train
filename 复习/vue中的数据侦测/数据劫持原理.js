// const arrayProto=Array.prototype//得到原型上的方法
// const proto=Object.create(arrayProto)//复制一份原型上的方法
// ;['push','pop','shift','splice'].forEach(method=>{
//     proto[method]=function(...args){
//         // console.log(this)
//         updateView();
//         arrayProto[method].call(this,...args)
//     }
// })


// // 观测
// function observer(obj){
//     if(typeof obj !="object" || obj==null){
//         return obj;
//     }
//     if(Array.isArray(obj)){
//         // 是数组
//         // 如果是数组要重写数组上原型上的方法
//         Object.setPrototypeOf(obj,proto)
//         for(let i=0;i<obj.length;i++){
//             let item=obj[i];
//             observer(item)
//         }
//     }else{
//         // 是对象
//         for(let key in obj){
//             // console.log(obj)//{ name: 'wangcai', age: 100 }
//             definedReactive(obj,key,obj[key])
//         }
//     }
// }

// // 监控
// function definedReactive(obj,key,value){
//     observer(value)
//     // Object.defineProperty默认只能劫持对象，vue 3 版本后使用proxy
//     Object.defineProperty(obj,key,{
//         // 精细化设置
//         get(){
//             console.log("获取数据..")
//             // console.log(value)//{ name: [Getter/Setter], age: 100 }
//             return value
//         },
//         set(newValue){
//             if(value!=newValue){
//                 observer(newValue)
//                 value=newValue;
//                 updateView();
//             }
//         }
//     })
// }

// function updateView(){
//     console.log("更新数据...")
// }

const arrayProto=Array.prototype;
const proto=Object.create(arrayProto)
;['push','pop','splice','shift'].forEach(method=>{
    proto[method]=function(...args){
        updateView();
        arrayProto[method].call(this,...args)
    }
})

function observer(obj){
    if(typeof obj!="object"|| obj==null){
        return obj
    }
    if(Array.isArray(obj)){
        Object.setPrototypeOf(obj,proto)
        for(let i=0;i<obj.length;i++){
            let item=obj[i];
            observer(item)
        }
    }else{
        definedReactive(obj,key,obj[key])
    }
}

function  definedReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            console.log("得到数据...")
            return value
        },
        set(newValue){
            if(value!=newValue){
                value=newValue
                observer(newValue)
            }
        }
    })
}

function observer(){
    console.log("更新数据")
}




// 对象
// let data={name:{number:999},age:100}
// observer(data)
// data.name.number=6666
// console.log(data.name.number)

// 数组
let data={name:[1,2,{age:999}]}
observer(data)
// data.name[3].age=666;
data.name.push({address:"xxx"})
console.log(data.name)
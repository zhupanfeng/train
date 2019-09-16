let obj={
    name:'z3',
    age:{
        age:18
    }
}
// vue数据劫持 Object.defineProperty
// Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。
function observer(obj){
    if(typeof obj=='object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key]);
        }
    }
}
function defineReactive(obj,key,value){
     observer(value);//判断value是不是一个对象 如果是对象 会被继续监控
    Object.defineProperty(obj,key,{
        get(){
            console.log("数据被调用了...")
            return value
        },
        set(val){
             observer(val);//如果设置的值是对象 需要再进行这个对象的监控
            console.log("数据更新了...")
            value=val;
        }
    })
}

let arr=['push','slice','shift','unshift']
arr.forEach(method=>{
    let old=Array.prototype[method];
    Array.prototype[method]=function(value){
        console.log("数据更新了")
        old.call(this,value);
    }
})
//  observer(obj);
// obj.name="wc"
// console.log(obj.name)

// 数据更新了...
// 数据被调用了...
// wc


// 数据也可能是对象，是对象的话，数据更新就不会调用
// observer(obj);
// obj.age.age=100
// console.log(obj.age.age)

// observer(obj);
// // 触发一次
// obj.age={
//     a:1
// }
// // 没有触发
// obj.age.a=2

// observer(obj);
// obj.age={
//         a:1
//     }
// obj.age.a=2


//数组调用push时无效的  Object.defineProperty不支持数组
// observer(obj);
// obj.age=[1,2,3]
// obj.age.push(4)

// 数据更新了...
// 数据被调用了...
// 只触发了一次

// observer(obj);
// obj.age=[1,2,3]
// obj.age.push(4)


// 数据更新了...
// 数据被调用了...
// 数据更新了
// 触发了两次


// length并没有拦截到，数组不能通过长度修改，也不能通过数组的索引进行修改
// observer(obj);
// obj.age=[1,2,3]
// obj.age.length--;

// 数据更新了...
// 数据被调用了...
// 只触发一次
const arrayProto=Array.prototype;//得到原型上的方法
const proto=Object.create(arrayProto)//赋值一份原型上的方法
;['push','shift','pop','splice'].forEach(method=>{
    // 重写'push' 'shift' 'splice'
    // console.log(method)
    proto[method]=function(...args){
        // console.log(...args)//{ address: 'xxx' }
        // console.log(this)//[ 1, 2, 3, { age: [Getter/Setter] } ]
        updateView();
        arrayProto[method].call(this,...args)
    }
})

function updateView() {
    console.log("视图更新了...")
}

function observer(obj) {
    if (typeof obj != "object" || obj == null) {
        return obj;
    }
    if(Array.isArray(obj)){
        // 如果是一个数组要重写数组上原型的方法
        Object.setPrototypeOf(obj,proto)
        for(let i=0;i<obj.length;i++){
            let item=obj[i];
            observer(item)
        }
    }else{
        for (let key in obj) {
            // 实现数据劫持
            defineReactive(obj, key, obj[key])
        }
    }
}

function defineReactive(obj, key, value) {
    observer(value)//有可能value还是一个对象，继续观察,是多层
    Object.defineProperty(obj, key, {
        // 精细化设置一个对象的属性
        // defineProperty默认只能劫持对象
        get() {
            console.log("获取数据成功...")
            return value
        },
        set(newValue) {
            if (value !== newValue) {
                observer(newValue)
                value = newValue
                updateView();
            }
        }
    })
}



// // let data = { name: "wangcai", age: 100 }
// // 如果name的值还是一个对象，还需要去劫持这个对象
// let data = { name:{abc:"hello"}, age: 100 }
// observer(data)
// // console.log(data.name)
// data.name.abc= "666"
// console.log(data.name.abc)


let data={name:[1,2,3,{age:999}]}
observer(data)
// data.name[3].age=666;
data.name.push({address:"xxx"})
// console.log(data.name)//[ 1, 2, 3, { age: [Getter/Setter] }, { address: 'xxx' } ]
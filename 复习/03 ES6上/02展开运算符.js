// let a=[1,2,3]
// let b=[...a]//...是展开运算符
// console.log(b)

// 浅copy:copy前后两者还有关系
// 深copy:copy前后两者没有关系

// ...展开运算符,在copy基本数据类型时，是深copy
// let a=[1,2,3]
// let b=[...a]
// b[0]=999
// console.log(a)//[ 1, 2, 3 ]
// console.log(b)//[ 999, 2, 3 ]


// 如果使用展开运算符，展开一个对象时，是浅copy
// let obj={name:"wangcai"}
// let arr=[obj,2,3]
// let newArr=[...arr]
// console.log(arr)//[ { name: 'wangcai' }, 2, 3 ]
// console.log(newArr)///[ { name: 'wangcai' }, 2, 3 ]
// newArr[0].name="xiaoqiang";
// console.log(arr)//[ { name: 'xiaoqiang' }, 2, 3 ]
// console.log(newArr)//[ { name: 'xiaoqiang' }, 2, 3 ]

// slice如果数组中是基本数据类型，slice是深copy
// let arr=[1,2,3]
// let newArr=arr.slice(0)
// newArr[0]=999;
// console.log(arr)//[ 1, 2, 3 ]
// console.log(newArr)//[ 999, 2, 3 ]

// 如果数组中有对象，slice是浅copy
// let obj={name:"wangcai"}
// let arr=[obj,2,3]
// let newArr=arr.slice(0)//得到一个剪切后的新数组
// console.log(arr)//[ { name: 'wangcai' }, 2, 3 ]
// console.log(newArr)//[ { name: 'wangcai' }, 2, 3 ]
// newArr[0].name="ccc";
// console.log(arr)//[ { name: 'ccc' }, 2, 3 ]
// console.log(newArr)//[ { name: 'ccc' }, 2, 3 ]

// 展开对象 对象就一层是深copy
// let obj={name:'wangcai',age:100}
// let newObj={...obj}
// console.log(obj)//{ name: 'wangcai', age: 100 }
// console.log(newObj)//{ name: 'wangcai', age: 100 }
// newObj.name="kkk"
// console.log(obj)//{ name: 'wangcai', age: 100 }
// console.log(newObj)//{ name: 'kkk', age: 100 }

// 展开对象 对象是多层 是浅copy
// let obj = { name: 'wangcai', age: { number: 100 } }
// let newObj = { ...obj }
// console.log(obj)//{ name: 'wangcai', age: { number: 100 } }
// console.log(newObj)//{ name: 'wangcai', age: { number: 100 } }
// newObj.age.number = 999
// console.log(obj)//{ name: 'wangcai', age: { number: 999 } }
// console.log(newObj)//{ name: 'wangcai', age: { number: 999 } }

// 实现多层对象的深copy
// let obj={name:"wangcai",age:{number:888}}
// let newObj={...obj,age:{...obj.age}}
// newObj.age.number=999
// console.log(obj)//{ name: 'wangcai', age: { number: 888 } }
// console.log(newObj)//{ name: 'wangcai', age: { number: 999 } }

// 通过JSON.parse(JSON.stringify(obj))实现深copy
// let obj={name:"wangcai",age:{number:888}}
// let str=JSON.stringify(obj)
// let newObj=JSON.parse(str)
// console.log(newObj)//{ name: 'wangcai', age: { number: 888 } }
// obj.age.number=000
// console.log(obj)//{ name: 'wangcai', age: { number: 0 } }
// console.log(newObj)//{ name: 'wangcai', age: { number: 888 } }


// 通过JSON.parse(JSON.stringify()) 实现深copy的不足：
// 只能copy符合JSON格式的数据
let obj={name:"wangcai",age:function(){}}
let newObj=JSON.parse(JSON.stringify(obj))
console.log(newObj)//{ name: 'wangcai' }
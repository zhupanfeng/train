// JS中的集合：有 [数组]、{对象}、Set、Map
// Map 对象保存键值对 任何值（对象或者原始值)都可以作为一个键或者值
// 对象中也是保存键值对，但是键一般都是字符串

// 创建空的Map
// let map=new Map();
// console.log(map)//Map {}

// 创建有内容的Map []需要放键值 这里的键值是一数组的形式存放
// let map=new Map([1,2,3]);
// console.log(map)//Iterator value 1 is not an entry object

// let map=new Map([["name","wangcai"],["age",100]])
// console.log(map)//Map { 'name' => 'wangcai', 'age' => 100 }

// Map中api和Set差不多
// let map=new Map([["name","sss"],["age",999]])
// console.log(map.get("age"))//999
// map.set("name","ccc")
// console.log(map)//Map { 'name' => 'ccc', 'age' => 999 }


// 在set时没有的会自动增加为键值对
// let map=new Map([["name","sss"],["age",999]])
// map.set("hello","ok")
// console.log(map)//Map { 'name' => 'sss', 'age' => 999, 'hello' => 'ok' }

// let map=new Map([["name","sss"],["age",999]])
// map.set({address:"bj"},"ok")
// console.log(map)//Map { 'name' => 'sss', 'age' => 999, { address: 'bj' } => 'ok' }

// 内存泄漏
let map=new Map([["name","sss"],["age",999]])
let obj={address:1}
map.set(obj,666)
obj=null
console.log(map)//Map { 'name' => 'sss', 'age' => 999, { address: 1 } => 666 }
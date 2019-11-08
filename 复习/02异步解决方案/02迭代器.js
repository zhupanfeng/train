// const colors=["red","green","blue"]
// // 使用传统的循环不太优雅

// // 命令式
// // 它既要追踪下标位置，还要判断循环何时停止
// for(var i=0;i<colors.length;i++){
//     console.log(colors[i]);
// }

// 声明式
// for(i abc color){i}


// -----------------iterator：迭代器
// iterator是一个对象，对象中有一个next函数，函数返回一个对象，对象中有一个value 一个done

// 创建iterator
function createIterator(items){
    let i=0;
   return{
       next:function(){
           done=(i>=items.length);
           value=!done ? items[i++] :undefined;
           return{
               value:value,
               done:done,
           }
       }
   }
}
const colors=["red","green","blue"];

// 返回一个迭代器 interator是一个对象
let iterator=createIterator(colors)
// next()每一次迭代出一项
console.log(iterator.next())//{ value: 'red', done: false }
console.log(iterator.next())//{ value: 'green', done: false }
console.log(iterator.next())//{ value: 'blue', done: false }
console.log(iterator.next())//{ value: undefined, done: true }
console.log(iterator.next())//{ value: undefined, done: true }

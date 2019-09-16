// 高阶函数是指：1、它的参数是函数，或者2、它的返回值是函数

// function f(fn){
//     return function(){}
// } 


// before函数(装饰函数 AOP) 在执行一个函数之前去执行另一个函数
const f1=()=>{
    console.log("正在执行任务...")
}

Function.prototype.before=function(beforeFn){
    return ()=>{
        beforeFn();
        this();//谁调用before函数，this就指谁
    }
}
const f2=f1.before(()=>{
    console.log("开始...")
})
// f2()
const f3=f1.before(()=>{
    console.log("f3 开始...")
})
f3()
const f1=(...args)=>{
    console.log("正在执行任务...",args)
}

Function.prototype.before=function(beforeFn){
    return (...args)=>{
        beforeFn();
        this(...args);
    }
}
const f2=f1.before(()=>{
    console.log("开始...")
})
f2(1,2,3)

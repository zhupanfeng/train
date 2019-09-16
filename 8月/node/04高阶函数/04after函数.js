// 调用一个函数3次后，触发另一个函数，需要使用after函数

const after=(times,fn)=>{
        return ()=>{
            if(--times===0){
                fn()
            }
        }
}
const f1=after(3,()=>{
    console.log("调用三次后执行...")
})
f1()
f1()
f1()
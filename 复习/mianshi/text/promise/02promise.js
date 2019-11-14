
const PENDING="PENDING"
const REJECTED="REJECTED"
const RESOLVED="RESOLVED"


// 最基础版
// class Promise{
//     constructor(executor){
//         this.status=PENDING;
//         this.value=undefined;
//         this.reason=undefined
//        let reject=(reason)=>{
//            if(this.status==PENDING){
//                this.status=REJECTED;
//                this.reason=reason
//            }
//        }
//        let resolve=(value)=>{
//            if(this.status==PENDING){
//                this.status=RESOLVED;
//                this.value=value
//            }
//        }
//        try{
//            executor(resolve,reject)
//        }catch(e){
//            reject(e)
//        }
//     }
//     then(onfulfilled,onrejected){
//         if(this.status==RESOLVED){
//             onfulfilled(this.value)
//         }
//         if(this.status==REJECTED){
//             onrejected(this.reason)
//         }
//     }
// }


// 加入异步
class Promise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;
        this.reason=undefined;
        this.onResolvedCallbacks=[];//存成功的回调函数
        this.onRejectedCallbacks=[];//存失败的回调函数
        let resolve=(value)=>{
            if(this.status==PENDING){
                this.value=value;
                this.status=RESOLVED;
                this.onResolvedCallbacks.forEach(fn=>fn())
            }
        }
        let reject=(reason)=>{
            if(this.status==PENDING){
                this.reason=reason;
                this.status=REJECTED;
                this.onRejectedCallbacks.forEach(fn=>fn())
            }
        }
        try{
            executor(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    then(onfulfilled,onrejected){
        if(this.status==RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status==REJECTED){
            onrejected(this.reason)
        }
        if(this.status==PENDING){
            // 订阅
            this.onResolvedCallbacks.push(()=>{
                onfulfilled(this.value)
            })
            this.onRejectedCallbacks.push(()=>{
                onrejected(this.reason)
            })
        }
    }
}

module.exports=Promise
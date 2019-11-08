const PENDING = "PENGING";
const RESOLVED = "RESOLVED";
const REJECTED = "REJECTED";

function resolvePromise(promise2,x,resolve,reject){
    // 循环引用报错
    if(promise2===x){
        return reject(new TypeError('my Chaining cycle detected for promise #<Promise></Promise>'))
    }
   
   try{
    //    有可能x上会手动的加上一个then属性
    let then=x.then
    // 防止多次调用
    let called;
    if((typeof x==="object" && x!=null) || typeof x==="function"){
        // x是一个对象(不包含null)或是一个函数

        if(typeof then==="function"){
            // x有then,并且是一个then函数，说明x是pomise
            then.call(x,y=>{
                // 采用promise的成功结果向下传递
                // resolve(y)

                if(called) return;
                called=true;
                resolvePromise(promise2,x,resolve,reject)
            },r=>{
                // 采用promise失败的结果向下传递
                if(called) return;
                called=true;
                reject(r)
            })
        }else{
            // x有then，但是then不是函数，{then:"hello"}
            // x不是promise
            resolve(x)
        }

    }else{
        // x是一个普通值
        resolve(x)
    }
   }catch(e){
       reject(e)
   }
}

class Promise {
    constructor(executor) {
        this.status = PENDING;
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];//存成功的回调函数
        this.onRejectedCallbacks = [];//存失败的回调函数
        let resolve = (value) => {
            if (this.status == PENDING) {
                this.value = value;
                this.status = RESOLVED;
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status == PENDING) {
                this.reason = reason;
                this.status = REJECTED;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onfulfilled, onrejected) {

        // 防止then中没有函数
        onfulfilled=typeof onfulfilled==='function'?onfulfilled: value=>value;
        onrejected=typeof onrejected==='function'?onrejected: err=>{throw err};

        let promise2 = new Promise((resolve, reject) => {
            if (this.status === RESOLVED) {
                setTimeout(() => {
                    try {
                        // x可能是promise也可能是普通值
                        let x = onfulfilled(this.value)
                        //    加入X是promise(有自己状态),需要让promise也拥有这个状态
                        resolvePromise(promise2, x, resolve, reject);//处理promise2和x关系
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.status === PENDING) {
                // 订阅
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })

        return promise2;
    }
}

module.exports = Promise
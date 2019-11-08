
const PENDING="PENDING";
const RESOLVED="RESOLVED";
const REJECTED="REJECTED"

class Promise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;
        this.reason=undefined;
        let  resolve=(value)=>{
            if(this.status==PENDING){
                this.value=value;
                this.status=RESOLVED;
            }
        }
        let reject=(reason)=>{
            if(this.status==PENDING){
                this.reason=reason;
                this.status=REJECTED
            }
        }
        // 如果executor执行报错，直接执行reject
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e)
        }
    }
    then(onfulfilled,onrejected){
        if(this.status===RESOLVED){
            onfulfilled(this.value)
        }
        if(this.status===REJECTED){
            onrejected(this.reason)
        }
    }
}

module.exports=Promise
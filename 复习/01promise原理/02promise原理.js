const PENDING="PENDING"
const RESOLVED="RESOLVED"
const REJECTED="REJECTED"
class Promise{
    constructor(executor){
        this.status=PENDING;
        this.value=undefined;//终值
        this.resason=undefined;//拒因
        let resolve=(value)=>{//成功的函数
            if(this.status==PENDING){
                this.value=value;
                this.status=RESOLVED;
            }
        }
        let reject=(reason)=>{
            if(this.status==PENDING){
                this.reason=reason;
                this.status=REJECTED;
            }
        }
        try{
            executor(resolve,reject);
        }catch(e){
            reject(e)
        }
    }
    then(){
        
    }
}
module.exports=Promise

// commonJS导入导出 require  module.exports
// ES6导入导出 import from     export default
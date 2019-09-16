// md5 加密
const md5=require('md5');

let tools={
    getTime(){
        return new Date()
    },
    md5(str){
        return md5(str)
    },
    cateToList(data){
        let firstArr=[];
        for(let i=0;i<data.length;i++){
            if(data[i].pid == "0"){
                firstArr.push(data[i])
            }
        }
       for(let i=0;i<firstArr.length;i++){
           firstArr[i].list=[];
           for(let j=0;j<data.length;j++){
               if(firstArr[i]._id == data[j].pid){
                   firstArr[i].list.push(data[j])
               }
           }
       } 
    //    console.log(firstArr)
   return firstArr;
    }
}

module.exports=tools
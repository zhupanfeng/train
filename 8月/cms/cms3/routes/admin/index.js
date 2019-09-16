const router=require("koa-router")()
const DB=require("../../model/db")


// 创建二级路由
router.get("/", async (ctx) => {
    await ctx.render("admin/index")
})
// 更改状态
router.get("/changeStatus", async (ctx) => {
    // console.log("hello")
    let collectionName=ctx.query.collectionName;//得到集合
    let attr=ctx.query.attr;//得到集合中的某个字段
    let id=ctx.query.id;//得到id

   let data= await DB.find(collectionName,{"_id":DB.getObjectId(id)})
    if(data.length>0){
        if(data[0][attr]==1){
            var json={
                [attr]:0
            }
        }else{
            var json={
                [attr]:1
        }
    } 
   let updateResult=await DB.update(collectionName,{"_id":DB.getObjectId(id)},json)
   if(updateResult){
       ctx.body={"message":"更新成功","success":true}
   }else{
    ctx.body={"message":"更新失败","success":false}
   }
}else{
    ctx.body={"message":"更新失败,参数错误","success":false}
}
})
module.exports=router.routes()
const router=require("koa-router")()
const DB=require("../../model/db")
const tools=require("../../model/tools")

// 获取管理员列表的api接口 /api/manage/
router.get("/",async (ctx,next)=>{
    let result=await DB.find("admin",{})
    
    // for(let i=0;i<result.length;i++){
    //      delete result[i].password//去除对象里的某个属性
    // }
    // console.log(result)
    ctx.body=result

})

// 添加管理员的api接口
router.post("/add",async (ctx,next)=>{
    // 得到用户名，密码，确认密码
    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword

    //政则 \w匹配字母数字或下划线 ^以什么打头
   if( !/^\w{4,20}/.test(username)){
       let json={
           code:0,
           message:"用户名不合法",
       }
       ctx.body=json
   }else if(password !=rpassword || password.length<6){
    let json={
        code:0,
        message:"密码和确认密码不一致，或密码长度小于6位",
    }
    ctx.body=json
   }else{
    //    满足要求
    // 判断用户名在数据库中书否已经存在
   let findResult= await DB.find("admin",{"username":username})
    if(findResult.length>0){
        let json={
            code:0,
            message:"此用户已存在，请更换一个用户名",
        }
        ctx.body=json
    }else{
        let json={
            code:1,
            message:"恭喜您，添加用户名成功！",
        }
        ctx.body=json
        await DB.insert("admin",{"username":username,"password":tools.md5(password),"status":1,"last_time":""})
    }
}
})


// 更新管理员的api接口
router.post("/edit",async (ctx)=>{

    // 得到id
    let id=ctx.request.body.id

    let username=ctx.request.body.username
    let password=ctx.request.body.password
    let rpassword=ctx.request.body.rpassword
    
    if(password !=""){
        if(password !=rpassword || password.length<6){
            let json={
                code:0,
                message:"密码和确认密码不一致，或密码长度小于6",
            }
            ctx.body=json
        }else{
            let json={
                code:1,
                message:"恭喜您，更改密码成功",
            }
            ctx.body=json
            await DB.update("admin",{"_id":DB.getObjectId(id)},{"password":tools.md5(password)})
        }
    }else{
        let json={
            code:0,
            message:"密码不能为空!",
        }
        ctx.body=json
    }
})

// // 删除管理员
router.get("/remove",async (ctx)=>{
    // 得到集合名 id
    let collection=ctx.query.collection;
    let id=ctx.query.id
    let result=await DB.remove(collection,{"_id":DB.getObjectId(id)})
    if(result){
        ctx.body={
            code:1,
            message:"删除成功!",
        }
    }else{
        ctx.body={
            code:0,
            message:"删除失败",
        }
    }
})

module.exports=router.routes()
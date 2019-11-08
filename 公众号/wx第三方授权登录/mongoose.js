const mongoose=require('mongoose')
const {Schema}=mongoose
mongoose.connect('mongodb://127.0.0.1:27017/weixin',{
    useNewUrlParser:true
},()=>{
    console.log("数据库连接成功...")
})
let mySchema=new Schema({
    accessToken:String
})

exports.ServerToken=mongoose.model("ServerToken",mySchema)

let clientSchema=new Schema({
    access_token:String,
    expires_in:Number,
    refresh_token:String,
    openid:String,
    scope:String
})
// getToken方法
clientSchema.static.getToken=async function(openid){
    return await this.findOne({
        openid:openid
    })
}
// setToken方法
clientSchema.static.setToken=async function(openid,token){
    const query={openid:openid}
    const options={upsert:true}
    return await this.updateOne(query,token,options)
}
exports.clientToken=mongoose.model("clientSchema",clientSchema)
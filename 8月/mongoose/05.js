const NewsModel=require("./model/news")
const UserModel=require("./model/user")


let user=new UserModel({
    name:"wangcai "
})

let news=new NewsModel({
    title:"新闻"
})
user.save(err=>{
    if(err) console.log(err)
    console.log("success")
})

news.save(err=>{
    if(err) console.log(err)
    console.log("success")
})

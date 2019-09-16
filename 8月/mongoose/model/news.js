let mongoose=require("./db")

let NewsSchema=mongoose.Schema({
    title:String,
    
})

module.exports=mongoose.model("News",NewsSchema)

// let news=new News({
//     title:"ddd",
    
// })
// news.save(function(err,data){
//     if(err)console.log(err)
//     console.log("success")
// })
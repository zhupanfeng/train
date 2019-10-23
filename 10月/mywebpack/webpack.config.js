// 配置自己的webpack 遵循commonjs规范
const path=require("path")

// module.exports={
//     mode:"development",//当前开发模式
//     // 入口
//     entry:path.resolve(__dirname,"./src/index.js"),
//     // 出口
//     output:{
//         filename:"bundle.js",
//         path:path.resolve(__dirname,"dist")
//     }
// }

module.exports=(env)=>{
    // console.log(env)//{ development: true } { production: true }
}
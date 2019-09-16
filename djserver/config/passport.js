// 配置passport 验证jwt 搜索passport-jwt

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

    const keys=require("../config/keys")
    const mongoose=require("mongoose")
    const User=mongoose.model("users")//把User的model导入 操作users集合

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrkey;


module.exports=passport=>{
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        console.log(jwt_payload)//Unauthorized 不带token访问时 带时返回用户信息
        User.findById(jwt_payload.id).then(user=>{
            if(user){
                return done(null,user)
            }
            return done(null,false)
        }).catch(err=>{
            console.log(err)
        })
    }));
}

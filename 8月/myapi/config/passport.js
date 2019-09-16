// 专门用来配置Passport  验证jwt   配置的话，搜索passport-jwt

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose=require("mongoose")
const User=mongoose.model("Users")
const keys=require("../config/keys")

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey

module.exports=passport=>{
    passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
        User.findOne(jwt_payload.id).then(user=>{
            if(user){
                return done(null,user)
            }
            return done(null,false)
        }).catch(err=> console.log(err))
        }));
}
   
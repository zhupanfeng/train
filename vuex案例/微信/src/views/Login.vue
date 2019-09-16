<template>
    <div class="login">
            <div class="title">用户登录</div>
             <div class="content">
            <form>
                <InputGroup
                label="账号"
                placeholder="请填写邮箱"
                v-model="user.email"
                ></InputGroup>
                <InputGroup
                label="密码"
                placeholder="请填写密码"
                type="password"
                v-model="user.password"
                ></InputGroup>
            </form>
            <div class="btn_wrap">
                <KButton
                @click="loginClick"
                :disabled="isDisabled"
                >登录</KButton>
            </div>
            <div class="footer_wrap">
                <button class="register" @click="$router.push('/register')">注册账户</button>
            </div>
        </div>
    </div>
    
</template>
<script>
import InputGroup from '../components/InputGroup'
import KButton from '../components/KButton'
export default {
    name:"login",
    data(){
       return{
            user:{
            email:"",
            password:""
        }
       }
    },
     computed:{
        isDisabled(){
            if( this.user.email && this.user.password ){
                 return false
            }else {
                return true
            }
           
        } 
    },
    methods:{
        loginClick(){
             var reg = /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
             if(!reg.test(this.user.email)){
                 alert("请输入合法的邮箱！")
                 return;
             }
             this.$axios
             .post("http://160.238.86.82:5002/api/users/login",this.user)
             .then(res=>{
                 const {token}=res.data;
                 localStorage.setItem("wxToken",token)
                 this.$router.push("/")
             });
        }
    },
    components:{
          InputGroup,
            KButton
    }
}
</script>
<style scoped>
.login {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 16px;
  box-sizing: border-box;
}
.title {
  margin-top: 80px;
  font-size: 22px;
  text-align: center;
}
.footer_wrap {
  position: absolute;
  left: 0;
  bottom: 16px;
  text-align: center;
  width: 100%;
  color: #888;
}
.footer_wrap .register {
  font-size: 16px;
  outline: none;
  border: none;
  background-color: transparent;
  color: #7b8ca9;
}
.content,
.btn_wrap {
  margin-top: 30px;
}
</style>
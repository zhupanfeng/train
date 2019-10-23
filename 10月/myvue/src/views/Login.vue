<template>
  <div class="login">
    <Input
    v-model="username"
      prefix="ios-contact"
      placeholder="输入用户名"
      style="width: auto"
    />
    <br>
    <br>
    <Button type="info" @click="login()">登录</Button>
  </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
  data(){
    return{
      username:''
    }
  },
  methods:{
    ...mapActions(['toLogin']),
    login(){
      this['toLogin'](this.username).then(data=>{
        this.$router.push("/");
      },err=>{
        this.$Message.error(err)
      })
    }
  }
}
</script>>
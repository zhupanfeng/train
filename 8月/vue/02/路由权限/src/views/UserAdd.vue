<template>
    <div>
      <input type="text" v-model="username">
        <button @click="tolist">去列表页面</button>
    </div>
</template>
<script>
export default {
    name:"userAdd",
    methods:{
        tolist(){
            this.$router.push('/user/list');
        }
    },
    // 进入另一个组件时，会自动触发钩子
    beforeRouteLeave(to,from,next){
        if(this.username){
            let confirm=window.confirm('你需要切换吗?');
            // alert(confirm);
            if(confirm){
                next();
            }
        }else{
            next();
        }
    },
    data(){
        return{
            username:''
        }
    }
}
</script>
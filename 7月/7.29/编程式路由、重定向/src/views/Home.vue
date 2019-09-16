<template>
    <div class="home">
        <h1>网页首页</h1>
        <button @click="f">关于我们</button>
    </div>
</template>
<script>
    export default{
        methods:{
            f(){
                this.$router.push("/about")
            }
        }
    }
</script>
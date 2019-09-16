<template>
    <div class="about">
        <button @click="m">返回</button>
        <h1>关于我们</h1>
    </div>
</template>
<script>
    export default{
        methods:{
            m(){
                this.$router.push("/home")
                this.$router.go(-1)
            }
        }
    }
</script>


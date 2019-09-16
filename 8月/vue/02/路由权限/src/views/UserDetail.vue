<template>
    <div>
       
         {{this.$route.query.id}}号用户详情,
        <!-- 使用问号形式传参 -->
        {{this.$route.params.id}}号用户详情,
        <!-- 使用路径形式传参 -->
    </div>
</template>
<script>
export default {
    // hash模式下才能监控到路径变化
    // watch:{
    //     $route(){
    //         alert(1);
    //     }
    // },


    beforeRouteUpdate(to,from,next){
        next();
    }
}
</script>
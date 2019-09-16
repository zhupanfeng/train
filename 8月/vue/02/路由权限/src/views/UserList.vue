<template>
    <div>
        <li><router-link to="/user/detail?id=1">用户1</router-link></li>
        <li><router-link to="/user/detail/2">用户2</router-link></li>
        <li><router-link to="/user/detail/3">用户3</router-link></li>
    </div>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        if(from.name === 'userAdd'){
        }
        // 这里this得不到实例
        next(vm=>{
        });
    }
}
</script>
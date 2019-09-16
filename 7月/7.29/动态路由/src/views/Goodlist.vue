<template>
    <div class="goodlist">
        <h1>这是商品列表</h1>
        <ul>
            <li><router-link to="/detail/1">1号商品</router-link></li>
            <li><router-link to="/detail/2">2号商品</router-link></li>
            <li><router-link to="/detail/3">3号商品</router-link></li>
            <li><router-link to="/detail/4">4号商品</router-link></li>
        </ul>

        <p>动态路由传递多个参数</p>

        <h3><router-link to="/detail/zhangsan/21">传递多个参数</router-link></h3>
    </div>
</template>
<script>
</script>
<style scoped>
</style>
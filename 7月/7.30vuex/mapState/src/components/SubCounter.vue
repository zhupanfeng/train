<template>
    <div class="subcounter">
        <p>我是子组件subcounter</p>
        <p>当前counter的值为{{this.$store.state.counter}}</p>
        <button @click="subone">减1</button>
    </div>
</template>
<script>
export default {
    methods:{
        subone(){
            this.$store.commit("sub")
        }
    }
}
</script>


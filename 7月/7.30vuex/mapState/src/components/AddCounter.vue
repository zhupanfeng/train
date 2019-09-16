<template>
    <div class="addcounter">
        <p>我是子组件addcounter</p>
        <p>当前counter的值为{{this.$store.state.counter}}</p>
        <button @click="addone">加1</button>
    </div>
</template>
<script>
export default {
    methods:{
        addone(){
            this.$store.commit("add")
        }
    }
}
</script>


<template>
    <div>
        <p>son1中有:{{money}}</p>
        <button @click="changeMoney()">修改钱</button>
    </div>
</template>
<script>
export default {
    props:{
        money:{
            type:Number
        }
    },
    methods:{
        changeMoney(){
            // 在vue中不能直接去修改props中的数据
            // this.money=1000;
            this.$emit("change",1000)
        }
    }
}
</script>
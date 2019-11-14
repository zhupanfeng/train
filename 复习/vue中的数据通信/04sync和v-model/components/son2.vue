<template>
    <div>
        <!-- son2--->{{value}} -->
        son2--->{{counter}}
        <!-- <button @click="change1">修改技术</button> -->
        <button @click="change1">修改技术</button>
    </div>
</template>
<script>
export default {
    props:{
        counter:{
            type:Number
        },
        value:{
            type:Number
        }
    },
    methods:{
        // change1(){
        //     this.$emit("change",100)
        // },
        change1(){
            this.$emit("update:counter",1000)
        },
        // change1(){
        //     this.$emit("input",200)
        // }
    }
}
</script>
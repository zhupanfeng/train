<template>
    <div>
        <p>son1中有:{{money}}</p>
        <button @click="changeMoney()">修改钱</button>

        <Grandson1 :money="money" @change="change"></Grandson1>
    </div>
</template>
<script>
import Grandson1 from './grandson1';
export default {
    components:{
        Grandson1
    },
    props:{
        money:{
            type:Number
        }
    },
    methods:{
        changeMoney(){
            this.$emit("change",1000)
        },
    }
}
</script>
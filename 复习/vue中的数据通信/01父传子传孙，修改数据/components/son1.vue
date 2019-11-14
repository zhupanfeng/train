<template>
    <div>
        <p>son1中有:{{money}}</p>
        <!-- changeMoney() 表示没有实参 -->
        <!-- changeMoney 没有带() 相当于传递了一个事件对象 -->
        <button @click="changeMoney()">修改钱</button>


        <!-- <Grandson1 :money="money"></Grandson1> -->
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
            // 在vue中不能直接去修改props中的数据
            // this.money=1000;
            this.$emit("change",1000)
        },
        // change(newValue){
        //     this.$emit("change",newValue)
        // }
    }
}
</script>
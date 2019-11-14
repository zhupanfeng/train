<template>
    <div>
        Parent中有：{{money}}钱
        <!-- title="xxx"叫属性 -->
        <!-- <Son1 title="xxx"></Son1> 可以把属性传递给Son1 -->
        <!-- <Son1 xxx="money"></Son1> 把xxx属性传递给Son1 money仅仅是字符串的money -->
        <!-- <Son1 :xxx="money"></Son1> 把money这个变量传递给Son1 -->
        <!-- :xxx="money" 现在Son1身上有一个属性叫xxx,xxx值为100 -->
        <!-- <Son1 :xxx="money"></Son1> -->

        <!-- :money="money" 前面的money是属于子属性 后面的money是属于父中的数据 -->
        <!-- @change="change" 前面的change是属于子中的属性 后面的change是属于父中的方法 -->
        <Son1 :money="money" @change="change"></Son1>|
    </div>
</template>
<script>
import Son1 from "./son1"
export default {
    data(){
        return{
            money:100
        }
    },
    methods:{
        change(newValue){
            this.money=newValue
        }
    },
    components:{
        Son1
    }
}
</script>

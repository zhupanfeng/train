<template>
    <div>
        Parent----> {{counter}}
        <hr>
        <!-- <Son2 :counter="counter" @change="changeCounter"></Son2>| -->
        <!-- <Son2 :counter="counter" @update:counter="changeCounter"></Son2>| -->
   
   <!-- <Son2 :counter="counter" @update:counter="newValue=>counter=newValue"></Son2>| -->
    
    <!-- sync=属性传递+事件传递 -->
    <!-- 默认内部需要触发update:counter -->
    <Son2 :counter.sync="ccc"></Son2>


    <!-- <Son2 :value="counter" @input="newValue=>counter=newValue"></Son2> -->
    <!-- <Son2 v-model="counter"></Son2> -->
    <!-- v-model是 value和@input的语法糖 -->
    <!-- 如果只给子组件传递一个属性可以使用v-model -->
    <!-- 如果给Son2传递多个属性可以使用.sync -->
    </div>
</template>
<script>
import Son2 from "./son2"
export default {
    data(){
        return{
            counter:1
        }
    },
    methods:{
        // changeCounter(newValue){
        //     this.counter=newValue
        // }
    },
    components:{
        Son2
    }
}
</script>

<template>
    <div id="app">
      <p>{{list}}</p>
      <!-- <button @click="f1">点击</button> -->
      <button @click="add('4')">点击</button>
    </div>
    
</template>
<script>
import { mapState,mapGetters, mapMutations } from "vuex"
  export default{
    computed:{
        ...mapState(["list"])
     },
     methods:{
       ...mapMutations(["add"])
      //  f1(){
      //     // this.$store.commit("add","4")
      //  }
     }
    };
    
</script>

<style>
</style>

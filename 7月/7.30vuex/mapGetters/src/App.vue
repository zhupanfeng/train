<template>
    <div id="app">
      <!-- <p>{{list}}</p> -->
      <!-- <p>不及格的学生人数是：{{this.$store.getters.faileNumber}}</p> -->
      <h2>不及格的学生人数是{{faileNumber}}</h2>
    </div>
    
</template>
<script>
import { mapState,mapGetters } from "vuex"
  export default{
    computed:{
      ...mapGetters(["faileNumber"]),
      // ...mapState(["list"]),
    //  faileNumber(){
    //    return this.$store.getters.faileNumber
     }
    }
    
</script>

<style>
</style>

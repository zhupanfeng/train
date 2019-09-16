<template>
  <div id="app">
    <!-- <Test :n="2">app</Test> -->


    <!-- <Test2>app</Test2> -->


    <!-- <Test2 :n="2">app</Test2> -->

    
    <Test2 :n="2">app</Test2>
  </div>
</template>
<script>
// import Test from "./Test"
import Test2 from "./Test2"
export default {
  components:{
    // Test
    Test2
  }
}
</script>
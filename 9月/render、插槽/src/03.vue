<template>
  <div id="app">
    <Test4 :data="['html','css','js']" ></Test4>
  </div>
</template>
<script>
import Test4 from "./Test4"
export default {
  components:{
    Test4
  },
  methods:{
    render(h,data){
      return <span>{data}</span>
    }
  }
}
</script>
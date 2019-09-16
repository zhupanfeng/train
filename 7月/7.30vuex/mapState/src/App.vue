<template>
  <div id="app">
    <p>我是根组件，当前counter的值是：{{this.$store.state.counter}}</p>
    <br>
    <add-counter></add-counter>
    <br>
    <sub-counter></sub-counter>
    <br> -->
    <button @click="add100">加100</button>
    <br>
    <h3>{{counter}}</h3>
    <br>
    <h6>{{msg}}</h6>
    <br>
    <h1> {{stus}}</h1>
  </div>
</template>
<script>
import AddCounter from "@/components/AddCounter"
import SubCounter from "@/components/SubCounter"
// 解构赋值
import {mapState} from "vuex"
export default{
  data(){
    return {
      msg:this.$store.state.counter
    }
  },
  computed:{
    // counter(){return this.$store.state.counter},
    // stus(){return this.$store.state.stus}
    ...mapState(["counter","stus"])
  },
  components:{
    AddCounter,
    SubCounter
  },
  methods:{
    add100(){
      this.$store.commit("addN",100)
    }
  }
}
</script>

<style>
</style>

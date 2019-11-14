<template>
  <div>
    <!-- {{$attrs}} -->
    <h1>hhhhh</h1>
    <!-- <Grandson2 v-bind="$attrs"></Grandson2> -->
    <!-- $listeners 里面保存了很多的事件 -->
    <!-- v-on="listeners" 给grandson上面绑定了很多的事件 -->
    <Grandson2 v-on="$listeners"></Grandson2>

    <!-- <button ></button> -->
  </div>
</template>
<script>
import Grandson2 from "./grandson2";
export default {
  inheriAttrs: false, //可以把传递过来的属性不作为标签真正的属性
  methods:{
    // sayHellow(){
    //   window.console.log("son2:sayHellow方法")
    // }
  },
  components: {
    Grandson2
  }
};
</script>
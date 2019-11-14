<template>
  <div>
    {{$attrs}}
    <!-- 除了使用props接收数据，还可以使用attrs，如果使用attrs结束数据会作为标签的真正属性 -->
    <!-- 如果使用$attrs 就不能再使用props -->
    <!-- inheriAttrs:false 可以把传递过来的属性不作为标签真正的属性-->
    <!-- 把数据传递下去 -->
    <Grandson2 v-bind="$attrs"></Grandson2>
  </div>
</template>
<script>
import Grandson2 from "./grandson2";
export default {
  inheriAttrs: false, //可以把传递过来的属性不作为标签真正的属性
  components: {
    Grandson2
  }
};
</script>
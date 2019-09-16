<template>
  <div id="app">
      <template>
        <!-- 作用域插槽 ctx上下文 -->
        <!-- <slot2 v-slot:default="ctx">
          {{ctx.foo}}
        </slot2> -->


        <slot2 v-slot:sss="ctx">
          {{ctx.foo}}
        </slot2>
      </template>
  </div>
</template>
<script>
import slot2 from "./Slot2"
export default {
  components:{
    slot2
  }
}
</script>
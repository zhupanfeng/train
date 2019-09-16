<template>
  <div id="app">
    <!-- <slot1>匿名插槽</slot1>
    <slot1>匿名插槽</slot1>
    <slot1>匿名插槽</slot1>
    <slot1>匿名插槽</slot1> -->

    <slot1 v-slot:default>默认插槽</slot1>

    <!-- <slot1 v-slot:name>具名插槽</slot1> -->
  </div>
</template>
<script>
import slot1 from "./Slot1"
export default {
  components:{
    slot1
  }
}
</script>
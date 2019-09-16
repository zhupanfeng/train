<template>
  <div>
    <!-- <slot :foo="foo"></slot> -->

    <slot name="sss" :foo="foo"></slot>
  </div>
</template>

<script>
export default {
    data(){
      return{
        foo:"bar"
    }
    }
}
</script>
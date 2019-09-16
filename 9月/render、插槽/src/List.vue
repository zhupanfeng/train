<template>
   <div>
       <template v-for="(item) in data" >
           <slot  :item="item" ></slot>
       </template>
   </div>
</template>
<script>
export default {
    props:{
        data:Array
    }
}
</script>
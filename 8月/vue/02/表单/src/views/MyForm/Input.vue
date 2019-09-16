<template>
<div>
    <!-- $attrs保存了父传子的所有东西 -->
    <input :value="value" @input="onInput" v-bind="$attrs">
</div>
</template>
<script>
export default {
    props:{
        value:{
            type:String,
            default:""
        }
    },
    methods:{
        // e为事件对象
        onInput(e){
            this.$emit("input",e.target.value);

            // 触发FormItem中的validate事件
            this.$parent.$emit("validate")
        }
    }
}
</script>
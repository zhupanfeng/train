<template>
    <div>
        grangson2
        <hr>
        <!-- {{$attrs}} --> {{name}}
        <!-- <button @click="$listeners.click">grendson2Btn</button> -->
    </div>
</template>
<script>
export default {
    inject:['name'],
    mounted(){
        // this.$nextTick(()=>{
        //     // 发布
        //     this.$bus.$emit("change")
        // })
    }
}
</script>
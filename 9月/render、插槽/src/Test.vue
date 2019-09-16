<template>
    <div>
        <h1 v-if="n===1"><slot></slot></h1>
        <h2 v-else-if="n===2"><slot></slot></h2>
        <h2 v-else-if="n===2"><slot></slot></h2>
        <h2 v-else-if="n===2"><slot></slot></h2>
        <h3 v-else-if="n===3"><slot></slot></h3>
        <h4 v-else-if="n===4"><slot></slot></h4>
        <h5 v-else-if="n===5"><slot></slot></h5>
    </div>
</template>
<script>
export default {
    props:{
        n:{
            type:Number
        }
    }
}
</script>
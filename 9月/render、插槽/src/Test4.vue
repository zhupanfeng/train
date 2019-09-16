<template>
    <div>
        <template v-for="(item,index) in data">
            <li v-if="!render" :key="index">{{item}}</li>
            <Listitem v-else :key="index" :render="render" :item="item">{{item}}</Listitem>
        </template>
    </div>
</template>
<script>
import Listitem from "./Listitem"
export default {
    components:{
        Listitem
    },
    props:{
        data:{
            type:Array
        },
        render:{
            type:Function
        }
    }
}
</script>
<template>
    <div>
        Parent----> {{counter}}
        <hr>
        <Son2 :counter="counter" :money="money"></Son2>
    </div>
</template>
<script>
import Son2 from "./son2"
export default {
    data(){
        return{
            counter:1,
            money:2
        }
    },
    components:{
        Son2
    }
}
</script>

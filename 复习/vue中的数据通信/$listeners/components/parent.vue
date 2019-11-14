<template>
    <div>
        Parent----> {{counter}}
        <hr>
        <Son2 @click="show" @mousedown="show">show</Son2>
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
    methods:{
       show(){
            window.console.log("show...")
       }
    },
    components:{
        Son2
    }
}
</script>

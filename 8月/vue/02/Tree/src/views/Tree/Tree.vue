<template>
    <li>
        <div @click="toggle">
            {{model.title}}
            <span v-if="isFolder">{{open ? "-" :"+"}}</span>
        </div>
        <ul v-show="open">
            <Tree v-for="model in model.children" :model="model" :key="model.title"></Tree>
        </ul>
    </li>
</template>
<script>
export default {
    name:"Tree",
    data(){
        return{
            open:false
        }
    },
    computed:{
        isFolder(){
            return this.model.children && this.model.children.length
        }
    },
    props:{
        model:{
            type:Object,
            required:true,
        }
    },
    methods:{
        toggle(){
            if(this.isFolder)[
                this.open=!this.open
            ]
        }
    }
}
</script>
<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    provide(){
        return{
            // this表示把自己提供出去
            form:this
        }
    },
    props:{
        model:{
            type:Object,
            required:true
        },
        rules:{
            type:Object
        }
    },
    methods:{
        validate(cb){
            // 在Form中得到FormItem
        const tasks=this.$children.filter(item=>item.prop).map(item=>item.validate())
        
        // 所有任务通过了检验
        Promise.all(tasks).then(()=>cb(true)).catch(()=>cb(false));
        }
    }
}
</script>
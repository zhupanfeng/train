<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>
<script>
 import Schema from 'async-validator'
export default {
    inject:["form"],
    data(){
        return{
            errorMessage:"",
        }
    },
    props:{
        label:{
            type:String,
            default:"",
        },
        prop:{
            type:String
        }
    },
    mounted(){
        this.$on("validate",this.validate)
    },
    methods:{
        validate(){
            // 得到rules和model
         const  value=this.form.model[this.prop]
         const  rules=this.form.rules[this.prop]

        const desc={[this.prop]:rules};
         const schema =new Schema()
         return schema.validate({[this.prop]:value},errors=>{
             if(errors){
                 this.errorMessage=errors[0].message;
             }else{
                 this.errorMessage=''
             }
         })

        }
    },
}
</script>
<template>
    <div>
        <h2>这是我们自己封装的表单组件</h2>
        <hr>
        <k-form ref="loginForm" :rules="rules" :model="model">
            <k-form-item label="用户名" prop="username">
                <k-input v-model="model.username" type="text" placeholder="输入用户名"></k-input>
            </k-form-item>
            <k-form-item label="确认密码" prop="password">
                <k-input type="password" v-model="model.password" placeholder="输入用户名"></k-input>
            </k-form-item>
            <k-form-item>
                <button @click="submitForm('loginForm')">提交</button>
            </k-form-item>
        </k-form>
         {{model}}
    </div>
</template>


<script>
import kForm from './Form'
import kFormItem from './FormItem'
import KInput from "./Input"
import Notice from './KNotice'
export default {
    data(){
        return{
            model:{
                username:"ghsf",
                password:"",
            },
            rules:{
                username:[{required:true,message:"请输入用户名"}],
                password:[{required:true,message:"请输入密码"}],
            },
        }
    },
    methods:{
        submitForm(form){
            this.$refs[form].validate(valid=>{

                if(valid){
                    alert("请求登录")
                }else{
                    alert("校验失败")
                }

            //  const notice= this.$create(Notice,{
            //         title:"hello",
            //         message:valid ? "请求登录" : "校验失败",
            //         duration:1000
            //     })
            //     notice.show()
            })
        }
    },
    components:{
        kForm,
        kFormItem,
        KInput,
        Notice
    }
}
</script>
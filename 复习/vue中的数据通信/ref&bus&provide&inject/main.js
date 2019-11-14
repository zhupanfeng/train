// 项目入口
import Vue from "vue";
import App from "./App"

// 自己定义一个$dispatch方法
// Vue.propertype.$diapatch=function(eventName,value){
//     let parent=this.$parent;
//     while(parent){
//         parent.$emit(eventName,value)
//         parent=parent.$parent
//     }
// }

// $bus就是一个挂在在Vue原型上的一个方法
// 有了一个vm就可以使用$on $emit
// Vue.propertype.$bus=function(){
//     return new Vue()
// }

// Vue.propertype.$bus=()=>new Vue()


// 直接在Vue原型上挂在一个vm
// Vue.propertype.$bus=new Vue()

new Vue({
    el:"#app",
    render:h=>h(App)
})
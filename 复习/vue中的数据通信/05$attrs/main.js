// 项目入口
import Vue from "vue";
import App from "./App"

// 自己定义一个$dispatch方法
// Vue.property.$diapatch=function(eventName,value){
//     let parent=this.$parent;
//     while(parent){
//         parent.$emit(eventName,value)
//         parent=parent.$parent
//     }
// }


new Vue({
    el:"#app",
    render:h=>h(App)
})
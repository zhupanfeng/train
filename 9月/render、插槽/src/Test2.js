// export default{
//     // 不使用模板的形式来写组件，使用jsx写组件
//     // jsx靠的就是render函数，render函数里面有一个固定参数h
//     // createElement
//     // h是一个函数 h()调用函数
//     // 第一个参数表示创建什么样的标签
//     // 第二个标签表示这个标签中的属性
//     // 第三个参数表示这个标签中的内容
//     // 在render函数中返回h的调用
//     render(h){
//           return  h("h1",{
//               on:{
//                   click(){
//                       alert("123")
//                   }
//               },
//               attrs:{
//                 id:"box"
//               }
//           },[h("span",{},"hello")])
//     }
// }


// export default{
//     render(h){
//         // jsx
//         // 要在html中写js，需要把js代码放到{}
//         return <h1 on-Click={(()=>{alert("world")})}><span>hello</span></h1>
//     }
// }


export default{
    props:{
        n:{
            type:Number
        }
    },
    render(h){
        let tag="h"+this.n
        return <tag>{this.$slots.default}</tag>
    }
}
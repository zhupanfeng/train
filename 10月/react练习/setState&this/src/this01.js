import React from "react"
import ReactDOM from "react-dom"


// this只会出现在类组件中，函数组件中没有this
// 尽可能使用函数组件：函数组件没有this
// form表单有默认事件，可以通过evnet.preventDefault()去掉默认事件

// 要想this代表当前组件,有如下几种办法
// 1、使用箭头函数，(箭头函数里面没有this,默认向外找即当前组件),
// 2、使用普通函数，手动绑定this,没有绑定，普通函数this为undefined
// 3、使用匿名函数 onClick={()=>this.f1()} onClick={()=>{this.f1()}}
class Counter extends React.Component{
    state={number:0}
    // handleSubmit=(event)=>{
    //     event.preventDefault();//取消默认事件
    //     console.log(this)
    // }

    handleSubmit(event){
        event.preventDefault();//取消默认事件
        console.log(this)
    }
   render(){
       return(
        //    <form action="" onSubmit={this.handleSubmit.bind(this)}>
        //        用户名：<input type="text"/>
        //        <br/>
        //        密码：<input type="text"/>
        //        <br/>
        //        <input type="submit"/>
        //    </form>

        // ()=>{}为匿名函数

        // function (event){
            // 监听器，监听器的第一个参数是事件对象
        //     this.handleSubmit(event)
        // }

        // <form action="" onSubmit={(event)=>{this.handleSubmit(event)}}>
        <form action="" onSubmit={(event)=>this.handleSubmit(event)}>
               用户名：<input type="text"/>
               <br/>
               密码：<input type="text"/>
               <br/>
               <input type="submit"/>
           </form>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
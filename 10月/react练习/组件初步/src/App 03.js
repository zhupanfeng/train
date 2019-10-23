
import React from "react"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"wangcai",
            age:100
        }
        // 在构造器中把this绑定到f1上
        this.f1=this.f1.bind(this)
    }
    render(){
        return(
            <>
            <h1>父组件</h1>
            <span>{this.state.name}</span>
            <span>{this.state.age}</span>

            {/* 改变状态 靠事件 默认this没有绑定*/}
            {/* <button onClick={this.f1}>修改状态</button> */}

            {/* 手动绑定this this.f1.bind(this)  */}
            {/* <button onClick={this.f1.bind(this)}>修改状态</button> */}

            {/* 不绑定，把函数直接写在jsx中 */}
            {/* <button onClick={()=>{console.log(this)}}>修改状态</button> */}
            
            {/* 第三种绑定在构造器绑定 */}
            <button onClick={this.f1}>修改name</button>
            <button onClick={this.f2.bind(this)}>修改age</button>
            </>
        )
    }
    f1(){
        // alert("hello")
        // 在react中一个方法中的this,并不代表当前组件,要想代表当前组件,要手动绑定
        // console.log(this)//undefined

        // 改变状态用setstate
        this.setState({
            name:"wangxai"
        })
    }
    f2(){
        this.setState({
            // age:this.state.age+1

        // age:this.state.age++  this.state.age++ 整体是一个旧值

        age:++this.state.age
        })
    }
}

export default App;
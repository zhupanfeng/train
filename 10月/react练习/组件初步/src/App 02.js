
import React from "react"

// 组件中的状态利用state来实现 每一个react组件都有自己的state，相当于vue中的data
// 当状态改变视图也更新 状态定义到constructor中 
// 状态定义到当前组件,this表示显示组件 要使用this，需要显示调用super
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"wangcai"
        }
    }
    render(){
        return(
            <>
            <h1>父组件</h1>
            <span>{this.state.name}</span>
            </>
        )
    }
}

export default App;
import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    state={number:0}
    handleClick=(event)=>{
        // setState 更新state 内部会把多次更新合并成一次
        // 可能是同步的也可能是异步
        // this.setState({number:this.state.number+3})
        // this.setState({number:this.state.number+2})
        // this.setState({number:this.state.number+1})
        // console.log(this.state.number)//0

        // 要想在上一次setState的基础上再去更改状态
        // 第一种方法：在setState中写一个函数，函数的第一个参数代表上次状态
        // this.setState((prevState)=>({number:prevState.number+1}))
        // this.setState((prevState)=>({number:prevState.number+2}))
        // this.setState((prevState)=>({number:prevState.number+3}))

        // 第二种方法:嵌套 setState可以写两个参数，第二个参数是一个回调函数
        this.setState({number:this.state.number+3},()=>{
            this.setState({number:this.state.number+3},()=>{
                this.setState({number:this.state.number+3})
            })
        })
    }
    render(){
        return(
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>,window.app)
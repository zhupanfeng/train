import React from "react"
import ReactDOM from "react-dom"

// React.Component 自己写的组件需要继承React.Component
class News extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 1000)
    }
    render(){
        console.log("父组件的render")
        return(
            <div>
                <div>{this.state.date.toString()}</div>
                <Child></Child>
            </div>
        )
    }
}

class Child extends React.PureComponent{
    render(){
        console.log('子组件的 render');
        return (
            <div>子组件</div>
        )
    }
}

// 如果有父子组件，当父组件render时，子组件也会重新渲染
// 要是不想让子组件渲染 可以使用PureComponent
// React.PureComponent 如果一个组件继承了PureComponent,它里面的状态没有发生改变就不会重新渲染
ReactDOM.render(<News />, window.app)
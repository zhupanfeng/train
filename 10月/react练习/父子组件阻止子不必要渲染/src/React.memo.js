import React from "react"
import ReactDOM from "react-dom"

// React.Component 自己写的组件需要继承React.Component
class News extends React.Component {
    constructor(props) {
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
    render() {
        console.log("父组件的render")
        return (
            <div>
                <div>{this.state.date.toString()}</div>
                <C></C>
            </div>
        )
    }
}

function Child() {
    console.log('子组件的 render');
    return (
        <div>子组件</div>
    )
}

let C=React.memo(Child)
// 如果有父子组件，当父组件render时，子组件也会重新渲染
// 子组件如果是函数式组件，可以使用React.memo把子组件包裹起来
ReactDOM.render(<News />, window.app)
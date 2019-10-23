
import React from "react"
import Children from "./Children"

// 导入一个组件在JSX中使用， vue在template使用
// 每一个组件中都有一个state，react和vue一样，也可以使用props
// vue中 每一个组价都有一个data 数据源主要是:data、props

// props在vue主要是用来传递数据的，实现父子通信，是父给子传递数据
// react中props也是用来传递数据，实现通信的，也是父传子，可以传递数据，也可以传递方法


// props使用
// 需要有父组件子组件 父组件设置数据，子组件获取数据
// 子组件通过this.props.属性名 获取数据
class App extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'wangcai'
        }
    }
    render(){
        return(
            <>
            <h1>父组件</h1>
            <Children age="100" name={this.state.name}/>
            </>
        )
    }
}

export default App;
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
// ReactDOM.render(<App />,document.getElementById("app"));

ReactDOM.render(<App  name="wangcai"/>,document.getElementById("app"));
// {}表示里面放js代码

// ReactDOM.render(<App  name={true}/>,document.getElementById("app"));

// 无状态组件指这个组件中没有state，数据源通过props得到

    // 特点1.function 无状态组件不会被实例化，性能提高
    // 2.无状态组件不能访问this
    // 3、无状态组件没有生命周期，即没有钩子函数
    // 4.无状态组件数据源只能通过props得到
    // 5.react建议尽量使用无状态组件

    // 传递数据校验：propTypes





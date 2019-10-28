import React,{useState} from "react"
import ReactDOM from "react-dom"

function Counter(){
    // React.useState
    // useState 每一次渲染都是一个独立的闭包
    // useState 每一次改变状态时，都有自己独立的事件处理函数
    // useState 在使用alert时，仅仅是捕获到，当你点击这个按钮时当时的状态
    let [number,setNumber]=useState(0)
    function alertNumber(){
        setTimeout(()=>{
            alert(number)
        },3000)
    }
    return(
        <>
            <h1>{number}</h1>
            <button onClick={()=>{setNumber(number+1)}}>+</button>
            <button onClick={{alertNumber}}>alertNumber</button>
        </>
    )
}
// React Hooks 16之后
// 类组件不足：
    // 生命周期较多
    // this问题
    // 多个setState
    // Hooks api usexx
    // 在类组件中不能使用Hooks 
// React推荐使用 函数式组件和Hooks
ReactDOM.render(<Counter />, window.app)
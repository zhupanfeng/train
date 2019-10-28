import React from "react"
import ReactDOM from "react-dom"

// ref 可以利用ref获取真实的DOM元素
// 常见的用法有三种
// 第一种：给ref起名字 通过this.refs.xxx.value得到框的值，被淘汰
class Counter extends React.Component{
    state={number:0}
    add=()=>{
        let num1=this.refs.num1.value
        let num2=this.refs.num2.value
        // console.log(num1,num2)
        // console.log(typeof num1)//string
        // console.log(typeof num2)//string

        let res=parseFloat(num1)+parseFloat(num2)//把字符串变成num 有小数 parseFloat
        this.refs.res.value=res
    }
   render(){
       return(
       <div>
          <input ref="num1"/>+<input ref="num2"/><button onClick={this.add}>=</button><input ref="res" />
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
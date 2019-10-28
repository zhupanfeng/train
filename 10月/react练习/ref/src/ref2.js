import React from "react"
import ReactDOM from "react-dom"

// 第二种：利用ref函数 获取dom元素 也被废弃
class Counter extends React.Component{
    state={number:0}
    add=()=>{
        let num1=this.num1.value
        let num2=this.num2.value
        let r=parseFloat(num1)+parseFloat(num2)
        this.res.value=r
    }
   render(){
       return(
       <div>
          <input ref={input=>this.num1=input}/>+<input ref={input=>this.num2=input}/><button onClick={this.add}>=</button><input ref={input=>this.res=input} />
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
import React from "react"
import ReactDOM from "react-dom"

// 第三种(官方推荐)：
// 利用React.createRef()
class Counter extends React.Component{
    constructor(props){
        super(props)
        // 给当前组件挂num1、num2、res
        this.num1=React.createRef();
        this.num2=React.createRef();
        this.res=React.createRef();
    }
    state={number:0}
    add=()=>{
        let num1=this.num1.current.value
        let num2=this.num2.current.value
        let r=parseFloat(num1)+parseFloat(num2)
        this.res.current.value=r
    }
   render(){
       return(
       <div>
          <input ref={this.num1}/>+<input ref={this.num2}/><button onClick={this.add}>=</button><input ref={this.res} />
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
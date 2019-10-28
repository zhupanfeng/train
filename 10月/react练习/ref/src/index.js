import React from "react"
import ReactDOM from "react-dom"

// 受控与非受控
// 受react控制
// 可以通过ref得到真实dom，然后根据dom得到dom中内容
// 把框中值作为状态给react来控制，非受控就变为受控
class Counter extends React.Component{
    constructor(props){
        super(props)
        // 给当前组件挂num1、num2、res
        this.num1=React.createRef();
        this.num2=React.createRef();
        this.res=React.createRef();
        this.state={
            num1:0,
            num2:0
        }
    }
    state={number:0}
    add=()=>{
        let num1=this.num1.current.value
        let num2=this.num2.current.value
        let r=parseFloat(num1)+parseFloat(num2)
        this.res.current.value=r
    }
    handle=(event)=>{
        // console.log(event.target.dataset.name)
        this.setState({
           [event.target.dataset.name]:parseFloat(event.target.value)
        })
    }
   render(){
       return(
       <div>
          {/* <input ref={this.num1} readOnly value={this.state.num1}/>+<input ref={this.num2} readOnly value={this.state.num2}/><button onClick={this.add}>=</button><input ref={this.res} /> */}
          <input type="number" data-name="num1" ref={this.num1} onChange={this.handle} value={this.state.num1}/>
          +<input type="number" data-name="num2" onChange={this.handle} ref={this.num2}  value={this.state.num2}/>
          <button onClick={this.add}>=</button>
          <input readOnly value={this.state.num1+this.state.num2} ref={this.res} />
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
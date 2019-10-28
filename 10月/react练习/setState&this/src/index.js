import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    state={number:0}
    add=(event)=>{
        console.log(this)
        this.setState({number:this.state.number+1})
    }
   render(){
       return(
       <div>
           <p>{this.state.number}</p>
           {/* <button  onClick={this.add}>加1</button> */}
           {/* 传参的话可以使用匿名函数 */}
           <button  onClick={(event)=>{this.add(event)}}>加1</button>
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
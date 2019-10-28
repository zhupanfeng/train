import React from "react"
import ReactDOM from "react-dom"

class Counter extends React.Component{
    state={number:0}
    add=()=>{
        console.log(this)
        this.setState({number:this.state.number+1})
    }
   render(){
       return(
       <div>
           <p>{this.state.number}</p>
           {/* <button  onClick={this.add}>加1</button> */}
           {/* <button  onClick={this.add.bind(this)}>加1</button> */}
           {/* <button  onClick={()=>{this.add()}}>加1</button> */}
           <button  onClick={()=>{this.add()}}>加1</button>

           {/* 如果去调一个函数，没有参数，不能加() */}
       </div>
       )
   }
}

ReactDOM.render(<Counter/>,window.app)
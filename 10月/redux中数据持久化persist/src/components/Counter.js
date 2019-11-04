import React,{Component} from 'react'
import {connect} from "react-redux"
import action from "../store/actions/counter"

 class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={()=>{this.props.goto("/")}}>跳到Home</button>
            </div>
        )
    }
}

export default  connect(state=>state.counter,action)(Counter);
import React,{Component} from 'react'
import {connect} from "react-redux"
import  actions from "../store/actions/counter"
 class Counter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={()=>this.props.goto("/")}>跳到Home页面</button>
            </div>
        )
    }
}

export default connect(
    state=>state.counter,
    actions)(Counter);
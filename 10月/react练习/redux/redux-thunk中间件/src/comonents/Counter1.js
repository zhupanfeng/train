import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import actions from "../store/actions/counter1"
import *as types from "../store/action-types"

 class Counter1 extends Component {
    render() {
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.increment(3)}>+</button>
                <button onClick={()=>this.props.decrement(3)}>-</button>
                <br/>
                <br/>
                <button onClick={()=>this.props.incrementAsync(3)}>三秒后+</button>
            </div>
        )
    }
}

let  mapStateToProps=state=>({number:state.counter1.number})

export default connect(mapStateToProps,actions)(Counter1)
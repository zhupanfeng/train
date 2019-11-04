import *as React from "react"
import {connect} from "react-redux"
import {Store} from "../store/types"
import *as actions from "../store/actions"
import { number } from "prop-types"

interface Props{
    number:number,
    increment:any,
    decrement:any
}

class Counter extends React.Component<Props>{
    render(){
        return(
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
            </div>
        )
    }
}
let mapStateToProps=function(state:Store):Store{
    return state
}
export default connect(mapStateToProps,actions)(Counter);
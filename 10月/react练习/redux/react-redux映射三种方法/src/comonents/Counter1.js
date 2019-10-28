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
            </div>
        )
    }
}

// 第一种方法
// function mapStateToProps(state){
//    return {
//     number:state.counter1.number
//    }
// }

// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actions,dispatch)
// }

// 第二种
// let  mapStateToProps=state=>({number:state.counter1.number})
// let  mapDispatchToProps=dispatch=>({
//     increment(payload) {
//         return { type: types.ADD1,payload }
//     },
    
//     decrement(payload) {
//         return { type: types.SUB1,payload }
//     }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Counter1)

// 第三种
let  mapStateToProps=state=>({number:state.counter1.number})

export default connect(mapStateToProps,actions)(Counter1)
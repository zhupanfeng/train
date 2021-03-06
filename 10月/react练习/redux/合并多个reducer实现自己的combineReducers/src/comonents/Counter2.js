import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
// 把actionCreator和store.dispatch绑在一块
import { bindActionCreators } from "../redux"

// 声明一个action creator 产生action action是对象
function increment(payload) {
    return { type: types.ADD2,payload }
}

function decrement(payload) {
    return { type: types.SUB2,payload }
}
// 绑定
let actions = { increment, decrement };
actions = bindActionCreators(actions, store.dispatch)


export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: store.getState().counter2.number
        }
    }
    componentDidMount() {
        // 订阅仅仅是渲染render函数
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                number: store.getState().counter2.number
            })
        })
    }
    componentWillUnmount() {
        // 当组件将要卸载时，不再调用render函数
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>actions.increment(2)}>+</button>
                <button onClick={()=>actions.decrement(2)}>-</button>
            </div>
        )
    }
}
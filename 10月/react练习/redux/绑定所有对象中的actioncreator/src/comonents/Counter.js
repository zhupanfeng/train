import React, { Component } from 'react'
import store from "../store"
import * as types from "../store/action-types"
// 把actionCreator和store.dispatch绑在一块
import { bindActionCreators } from "../redux"

// 声明一个action creator 产生action action是对象
function increment() {
    return { type: types.ADD }
}

function decrement() {
    return { type: types.SUB }
}
// 绑定
// increment = bindActionCreators(increment, store.dispatch)
// decrement = bindActionCreators(decrement, store.dispatch)
// 把上面两个actioncreator放到一个数组中
let actions = { increment, decrement };
actions = bindActionCreators(actions, store.dispatch)


export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: store.getState().number
        }
    }
    componentDidMount() {
        // 订阅仅仅是渲染render函数
        this.unsubscribe = store.subscribe(() => {
            this.setState({
                number: store.getState().number
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
                {/* <button onClick={()=>store.dispatch(increment())}>+</button>
                <button onClick={()=>store.dispatch(decrement())}>-</button> */}

                {/* <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button> */}

                <button onClick={actions.increment}>+</button>
                <button onClick={actions.decrement}>-</button>
            </div>
        )
    }
}
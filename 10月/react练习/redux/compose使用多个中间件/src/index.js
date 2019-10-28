import React from "react"
import ReactDOM from 'react-dom'
import Counter from "./comonents/Counter"
import Counter1 from "./comonents/Counter1"
import Counter2 from "./comonents/Counter2"
import {Provider} from "react-redux"
import store from "./store"

ReactDOM.render(
    <Provider store={store}>
        <>
    <Counter1></Counter1>
    <Counter2></Counter2>
    </>
    </Provider>
,window.app)
import counter from "./counter"

import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

// let reducer=combineReducers({
//     counter:counter,
//     router:connectRouter(history),
// })

// 让history作为形参
let createRootReducer=history=>combineReducers({
    counter,
    router:connectRouter(history)
})

export default createRootReducer

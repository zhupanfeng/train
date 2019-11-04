import {createStore,applyMiddleware} from 'redux'
import reducers from "./reducer"
import {routerMiddleware} from "connected-react-router"
import history from "./history"

let router=routerMiddleware(history);

let store=createStore(reducers,applyMiddleware(router))

export default store
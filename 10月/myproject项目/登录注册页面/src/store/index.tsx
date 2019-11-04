import {createStore,applyMiddleware,Store} from "redux"
import {routerMiddleware} from "connected-react-router"
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise"
import history from "./history"
import reducer from "./reducers"

let store:Store=createStore(reducer,applyMiddleware(routerMiddleware(history),promise,thunk,logger))
export default store;
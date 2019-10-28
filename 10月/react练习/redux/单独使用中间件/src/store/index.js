import {createStore,applyMiddleware} from 'redux'
import * as types from "./action-types"
import reduxThunk from "redux-thunk"
import reducer from "./reducers/index"
import {createLogger} from "redux-logger"
import promiseMiddleware from 'redux-promise'


// 使用redux-thunk中间件
// const createStoreWithMiddleware=applyMiddleware(reduxThunk)(createStore);

// let store=createStoreWithMiddleware(reducer)


// 单独使用redux-logger中间件
const logger=createLogger({
})
// let store=applyMiddleware(logger)(createStore)(reducer)


// 单独使用redux-logger中间件
// let store=applyMiddleware(reduxThunk)(createStore)(reducer)


// 单独使用redux-primise中间件
// 使用promise也可以处理异步
// let store=applyMiddleware(promiseMiddleware)(createStore)(reducer)


export default store;

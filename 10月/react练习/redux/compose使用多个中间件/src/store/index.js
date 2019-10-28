// import {createStore,applyMiddleware} from 'redux'
import * as types from "./action-types"
import reduxThunk from "redux-thunk"
import reducer from "./reducers/index"
import {createLogger} from "redux-logger"
import promiseMiddleware from 'redux-promise'

import {createStore,applyMiddleware,compose} from "redux"


let logger=createLogger({

})

let arr=[reduxThunk,logger,promiseMiddleware];

const store=createStore(
    reducer,
    compose(applyMiddleware(...arr))
)

export default store;

import {createStore,applyMiddleware} from 'redux'
import * as types from "./action-types"
import reduxThunk from "redux-thunk"
import reducer from "./reducers/index"

const createStoreWithMiddleware=applyMiddleware(reduxThunk)(createStore);

let store=createStoreWithMiddleware(reducer)

export default store;

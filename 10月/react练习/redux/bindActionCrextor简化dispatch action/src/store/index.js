import {createStore} from 'redux'
import * as types from "./action-types"
import reducer from "./reducers/index"


let store=createStore(reducer)

export default store;

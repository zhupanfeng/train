import * as types from "../action-types"
import {Counter1} from "../types"
import {Action} from "../actions/counter1"

export default function(state:Counter1={number:99},action:Action):Counter1{
    switch(action.type){
        case types.INCREMENT1:
            return {number:state.number+1}
            case types.DECREMENT1:
                    return {number:state.number-1}
            default:
                return state
    }
}
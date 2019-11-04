import * as types from "../action-types"
import {Counter2} from "../types"
import {Action} from "../actions/counter2"


export default function(state:Counter2={number:99},action:Action):Counter2{
    switch(action.type){
        case types.INCREMENT2:
            return {number:state.number+1}
            case types.DECREMENT2:
                    return {number:state.number-1}
            default:
                return state
    }
}
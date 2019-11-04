import {Store} from "../types"
import {Action} from "../actions"

export default function(state:Store={number:1},action:Action):Store{
    switch(action.type){
        case types.INCREMENT:
            return {...state,number:state.number+1}
        case types.DECREMENT:
            return {...state,number:state.number-1}
        default:
            return state
    }
}
import * as types from "../action-types"
// action中包含了payload
export default function reducer(state={number:0},action){
    switch (action.type){
        case types.ADD1:
            return {number:state.number+action.payload}
        case types.SUB1:
            return {number:state.number-action.payload}
        default :
            return state
    }
}
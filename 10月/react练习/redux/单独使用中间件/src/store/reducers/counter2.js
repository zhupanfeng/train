import * as types from "../action-types"
// action中包含了payload
export default function reducer(state={number:99},action){
    switch (action.type){
        case types.ADD2:
            return {number:state.number+action.payload}
        case types.SUB2:
            return {number:state.number-action.payload}
        default :
            return state
    }
}
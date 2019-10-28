import counter1 from "./counter1"
import counter2 from "./counter2"
import {combineReducers} from "../../redux"

let reducer=combineReducers({
    counter1,
    counter2
})

export default reducer;










// import * as types from "../action-types"
// // action中包含了payload
// export default function reducer(state={number:99},action){
//     switch (action.type){
//         case types.ADD:
//             return {number:state.number+action.payload}
//         case types.SUB:
//             return {number:state.number-action.payload}
//         default :
//             return state
//     }
// }
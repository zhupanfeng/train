import {AnyAction} from "redux"
import *as types from "../action-types"
export interface TypeMime{
}

let initialState:TypeMime={
}

export default function(state:TypeMime=initialState,action:AnyAction):TypeMime{
    switch(action.type){
        default:
            return state
    }
}
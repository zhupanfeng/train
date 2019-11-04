import {AnyAction} from "redux"
interface TypeHome{

}

let initialState:TypeHome={

}

export default function(state:TypeHome=initialState,action:AnyAction):TypeHome{
    switch(action.type){
        default:
            return state
    }
}
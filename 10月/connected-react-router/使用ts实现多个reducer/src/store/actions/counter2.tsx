import {INCREMENT2,DECREMENT2} from "../action-types"

export interface Increment2{
    type:typeof INCREMENT2
}

export interface Decrement2{
    type:typeof DECREMENT2
}

export type Action=Increment2 | Decrement2

export function increment():Increment2{
    return {type:INCREMENT2}
}

export function decrement():Decrement2{
    return {type:DECREMENT2}
}
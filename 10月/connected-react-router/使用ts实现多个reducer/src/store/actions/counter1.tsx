import {INCREMENT1,DECREMENT1} from "../action-types"

export interface Increment1{
    type:typeof INCREMENT1
}

export interface Decrement1{
    type:typeof DECREMENT1
}

export type Action=Increment1 | Decrement1;

export function increment():Increment1{
    return {type:INCREMENT1}
}

export function decrement():Decrement1{
    return {type:DECREMENT1}
}
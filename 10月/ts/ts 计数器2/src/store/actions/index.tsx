import { INCREMENT,DECREMENT } from "../action-types";
import { type } from "os";

export type Action=Increment | Decrement

export interface Increment{
    type:typeof INCREMENT
}
export interface Decrement{
    type:typeof DECREMENT
}

export function increment():Increment{
    return {type:INCREMENT}
}

export function decrement():Decrement{
    return {type:DECREMENT}
}
import {combineReducers, ReducersMapObject} from "redux"
import {connectRouter} from "connected-react-router"
import home from "./home"
import history from "../history"

// 把所有的reducer放到一个对象中
let reducers:ReducersMapObject={
    home,
    router:connectRouter(history)
}

type TyprRootState={
    [key in keyof typeof reducers]:ReturnType<typeof reducers[key]>
}

export {TyprRootState}

let reducer=combineReducers<TyprRootState>(reducers)

export default reducer
import counter from "./counter"
import {combineReducers} from "redux"
import history from "../history"
import {connectRouter} from "connected-react-router"

let reducer=combineReducers({
    counter,
    router:connectRouter(history)
})

export default reducer;
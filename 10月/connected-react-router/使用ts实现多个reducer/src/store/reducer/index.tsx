import {combineReducers} from "redux"
import counter1 from "./counter1"
import counter2 from "./counter2"
import {connectRouter} from "connected-react-router"
import history from "../history"


let reducers=combineReducers({
    router:connectRouter(history),
    counter1,
    counter2,
})

export default reducers;
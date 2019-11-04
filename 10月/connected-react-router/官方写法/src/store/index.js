import { createStore, applyMiddleware } from "redux"

import createRootReducer from "./reducer";
import { routerMiddleware } from "connected-react-router"
import {createHashHistory} from "history"

// let store=createStore(
//     createRootReducer(history),
//     applyMiddleware(routerMiddleware(history))
// )

export const history=createHashHistory();

export default function configureStore(preloadedState){
    let store = applyMiddleware(
        routerMiddleware(history))(createStore)
        (createRootReducer(history),preloadedState);
    return store;
}


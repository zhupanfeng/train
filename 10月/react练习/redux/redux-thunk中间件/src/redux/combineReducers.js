import reducer from "../store/reducers";

export default function combineReducers(reducers){
    // reducers是一个对象，里面保存多个reducer
    return function(state={},action){
        let nextState={};
        // key是合并的状态树的属性名
        for(let key in reducers){
            nextState[key]=reducers[key](state[key],action)
        }
        return nextState;
    }
}
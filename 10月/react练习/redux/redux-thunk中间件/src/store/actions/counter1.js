import *as types from "../action-types"

function increment(payload) {
    return { type: types.ADD1,payload }
}

function decrement(payload) {
    return { type: types.SUB1,payload }
}

// 异步操作 需要中间件 因为dispatch只能处理对象，如果返回是函数无法处理,利用中间件可以对
// dispatch进行加强
function incrementAsync(){
    return function(dispatch){
        setTimeout(()=>{
            dispatch(increment(100))
        },3000)
    }
}
export default {increment,decrement,incrementAsync}
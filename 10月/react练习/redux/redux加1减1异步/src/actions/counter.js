import { setTimeout } from "timers"

// 同步的action creator
export function increment(){
    return{
        type:"INCREMENT"
    }
}

// 同步的action creator
export function decrement(){
    return{
        type:"DECREMENT"
    }
}

// 异步的action creator
// 使用了redux-thunk中间件，可以让action creator先不返回一个action
// 而是返回一个函数，在函数内部就可以对异步的action进行增强
export function incrementAsync(){
    return function(dispatch,getState){
        // 进行异步操作
        setTimeout(()=>{
            dispatch(increment())
        },3000)
    }
}

// 奇数加1
export function incrementIfOdd(){
    return function(dispatch,getState){
        const {counter}=getState();
        if(counter%2){
            // 奇数
            setTimeout(()=>{
                dispatch(increment())
            },3000)
        }
    }
}
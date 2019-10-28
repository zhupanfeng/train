import {createStore} from "./redux"//使用自己创建的仅仅实现了createStore

let show=document.getElementById("show")
let addBtn=document.getElementById("addBtn")
let subBtn=document.getElementById("subBtn")

const ADD="ADD";
const SUB="SUB"

function reducer(state={number:99},action){
    switch(action.type){
        case ADD:
            return {number:state.number+1}
        case SUB:
                return {number:state.number-1}
        default:
            return state;
    }
}

let store=createStore(reducer);

function render(){
    show.innerHTML=store.getState().number;
}

render();
// subscribe是订阅，即执行render函数
// unsubscribe是取消订阅,不再执行render函数
let unsubscribe=store.subscribe(render)

addBtn.addEventListener("click",()=>{
    store.dispatch({type:ADD});
    // console.log(store.getState().number)
    // render()
    // unsubscribe();
})
subBtn.addEventListener("click",()=>{
    store.dispatch({type:SUB})
    // render()
})
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";

function renderApp(appState) {
    renderTitle(appState.title);
    renderContent(appState.content);
}
function renderTitle(state) {
    let element = document.getElementById("title")
    element.style.color = state.color;
    element.innerHTML = state.text;
}
function renderContent(state) {
    let element = document.getElementById("content")
    element.style.color = state.color;
    element.innerHTML = state.text;
}
// 管理员 接收一个老状态和一个action，返回一个新状态
function reducer(state,action){
    switch (action.type) {
        case UPDATE_TITLE_COLOR:
            return {...state,title:{...state.title,color:action.payload}};
        case UPDATE_TITLE_TEXT:
            return {...state,title:{...state.title,text:action.payload}};
        case UPDATE_CONTENT_COLOR:
            return {...state,content:{...state.content,color:action.payload}};
        case UPDATE_CONTENT_TEXT:
            return {...state,content:{...state.content,text:action.payload}};
        default:
            return state;
    }
}
// 需要把reducer给了仓库
function createStore(reducer) {
    let state = {
        title: { text: "标题", color: "red" },
        content: { text: "内容", color: "green" }
    }
    function getState() {
        return state
    }
    function dispatch(action) {
        // 当调用reducer就可以得到一个新的状态
        state = reducer(state,action);
        console.log(state)
    }
    return {
        getState,
        dispatch
    }
}

let store = createStore(reducer)
renderApp(store.getState());

setTimeout(() => {
    store.dispatch({ type: UPDATE_TITLE_COLOR, payload: "skyblue" });
    renderApp(store.getState());
}, 3000)
// 有两个状态
let appState={
    title:{text:"标题",color:'red'},
    content:{text:'内容',color:'green'}
}

// 渲染标题和内容
function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}

// 渲染标题
function renderTitle(state){
    let element=document.getElementById("title")
    element.style.color=state.color;
    element.innerHTML=state.text;
}
// 渲染内容
function renderContent(state){
    let element=document.getElementById("content")
    element.style.color=state.color;
    element.innerHTML=state.text;
}



// 状态不能随便被改变，要想改变状态，需要派发一个动作定义出可以操作的动作

const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT"; 

// dispatch是一个函数，里面放一个action
// action一定是一个对象，里面有一个type，可以没有payload
function dispatch(action){
    switch(action.type){
        case UPDATE_TITLE_COLOR:
            appState.title.color = action.payload;
            break;
        case UPDATE_TITLE_TEXT:
            appState.title.text = action.payload;
            break;
        case UPDATE_CONTENT_COLOR:
            appState.content.color = action.payload;
            break;
        case UPDATE_CONTENT_TEXT:
            appState.content.text = action.payload;
            break;
        default:
            break;
    } 
}

renderApp(appState);
setTimeout(()=>{
    dispatch({type:UPDATE_TITLE_COLOR,payload:"skyblue"});
    dispatch({type:UPDATE_CONTENT_TEXT,payload:"HelloWorld"})
    renderApp(appState);
},3000)

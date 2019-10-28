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

renderApp(appState);

// 不足：可以随意的改变状态
// appState.title.color="black";
// renderApp(appState);

// 不足：状态可以随意被置为空
// appState=null;
// renderApp(appState);
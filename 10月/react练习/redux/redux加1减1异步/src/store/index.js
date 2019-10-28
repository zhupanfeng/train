import {createStore,applyMiddleware} from "redux"
import reducer from "../reducer"
// 引入redux-thunk中间件，让它来处理异步的action
import thunkMiddleware from "redux-thunk"

// 对老的进行增强
const createStoreWithMiddleware=applyMiddleware(thunkMiddleware)(createStore)


// 初始化状态
const state={
    counter:99
}
// 创建一个仓库，直接可以把一个状态放到仓库中
// createStore 之前是通过一个createStore来创建仓库的
// 现在可以通过带有第三方中间件来创建仓库
// const store=createStore(reducer,state);
const store=createStoreWithMiddleware(reducer,state);

// 导出仓库
export default store;
import *as React from "react"
import *as ReactDOM from "react-dom"
import Counter from "./components/Counter"
import { Provider } from "react-redux"
import store from "./store"
import history from "./store/history"
import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from "./components/Home"


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link to="/">首页</Link>
        <Link to="/counter">计数器页面</Link>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/counter" component={Counter}></Route>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


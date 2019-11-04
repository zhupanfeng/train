import React, { useState } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { HashRouter, Route, Link } from "react-router-dom"
import store from "./store"
import Home from "./components/Home"
import Counter from "./components/Counter"
import {ConnectedRouter} from "connected-react-router"
import history from "./store/history"


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Link to="/">首页</Link>
      <Link to="/counter">计数器</Link>
      <Route exact path="/" component={Home}></Route>
      <Route path="/counter" component={Counter}></Route>
    </ConnectedRouter>
  </Provider>,
  window.app
)


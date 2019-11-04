import React, { useState } from "react"
import ReactDOM from "react-dom"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Counter from "./components/Counter"
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from "react-redux"
import configureStore, { history } from './store'

let store = configureStore({ counter: { number: 10 } })
ReactDOM.render(
     <Provider store={store}>
          <ConnectedRouter history={history}>
               <Router>
                    <Link to="/">首页</Link>
                    <Link to="/counter">计数器</Link>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/counter" component={Counter}></Route>
               </Router>
          </ConnectedRouter>
     </Provider >,
     window.app
)


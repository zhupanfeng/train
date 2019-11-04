import *as React from "react"
import *as ReactDOM from "react-dom"
import Counter from "./components/Counter"
import { Provider } from "react-redux"
import store from "./store"
import history from "./store/history"
import { ConnectedRouter } from "connected-react-router"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Link to="/counter1">counter1</Link>
        <Link to="/counter2">counter2</Link>
        <Route exact path="/counter1" component={Counter1}></Route>
        <Route exact path="/counter1" component={Counter2}></Route>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


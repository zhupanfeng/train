import React from "react"
import ReactDom from "react-dom"
import { Switch, Route, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"
import { ConnectedRouter } from "connected-react-router"
import history from "./store/history"
import Home from "./pages/Home"
import Mime from "./pages/Mime"
import Profile from "./pages/Profile"
import Tabs from "./components"
import "./assets/common.less"
import { ConfigProvider } from "antd"
import zh_CN from 'antd/lib/locale-provider/zh_CN';


ReactDom.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <main className="main-container">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/mime" component={Mime}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Redirect to="/" />
                </Switch>
                </main>
                <Tabs></Tabs>
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('app')
)
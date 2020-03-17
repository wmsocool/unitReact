import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import FormPage from "./page/formPage"
import Users from "./page/users"
import About from "./page/about"

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={FormPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/user" component={Users} />
      <Route exact path="/user/:userId" component={Users} />
    </Switch>
  </HashRouter>
)

export default BasicRoute

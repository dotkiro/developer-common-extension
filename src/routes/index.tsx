import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from '../containers/Home'
import Popup from '../containers/Popup'

const Routes = () => {
  return <HashRouter>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/popup">
      <Popup />
    </Route>
  </HashRouter>
}

export default Routes

import React from 'react';
import { Router, Route, hashHistory } from 'react-router'
import AppContainer from 'containers/app-container'
import Menu from 'components/menu'

const Routes = (props) => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
      </Route>
    </Router>
  )
}

export default Routes;

import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import AppContainer from 'containers/app-container'
import FeedContainer from 'containers/feed-container'
import LoginContainer from 'containers/login-container'

const Routes = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="/feed" component={FeedContainer} />
        <IndexRoute component={LoginContainer} />
      </Route>
    </Router>
  )
}
//        <IndexRoute component={Home} />

export default Routes;

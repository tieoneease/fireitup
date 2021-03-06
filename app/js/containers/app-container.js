import React, { Component } from 'react'
import { withRouter } from 'react-router';
import { Container } from 'semantic-ui-react'

import Nav from 'components/nav'
import LoginContainer from 'containers/login-container'

class AppContainer extends Component {
  render() {
    return (
      <Container>
        <Nav />
        { this.props.children }
      </Container>
    )
  }
}

export default withRouter(AppContainer)

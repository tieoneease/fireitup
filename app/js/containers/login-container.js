import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import LoginForm from 'components/login-form'

const LoginContainer = () => (
  <Container text>
    <Segment padded raised color='yellow'>
      <LoginForm />
    </Segment>
  </Container>
)

export default LoginContainer

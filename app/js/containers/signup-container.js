import React from 'react'
import { Container, Segment } from 'semantic-ui-react'
import SignUpForm from 'components/signup-form'

const SignUpContainer = () => (
  <Container text>
    <Segment padded raised color='yellow'>
      <SignUpForm />
    </Segment>
  </Container>
)

export default SignUpContainer

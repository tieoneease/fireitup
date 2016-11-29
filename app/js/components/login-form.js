'use strict'
import React, { Component } from 'react'
import { Button, Form, Input, Message, Segment, Divider } from 'semantic-ui-react'
import { withRouter } from 'react-router';
import base from 'config/base'




class LoginForm extends Component {
  static contextTypes = { router: React.PropTypes.object }

  state = { serializedForm: {} }
  handleChange = (e, { value }) => this.setState({ value })

  authHandler = (error, user) => {
    if (error) console.log('errored: ' ,error.message)
    else this.context.router.push('/feed')
  }

  login = (serializedForm) => base.authWithPassword(serializedForm, this.authHandler);

  handleLogin = (e, serializedForm) => {
    e.preventDefault()
    this.setState({ serializedForm })
    this.login(serializedForm)
  }

  render() {
    const { serializedForm, value } = this.state
    return (
      <Form onSubmit={this.handleLogin}>
        <Form.Field>
          <label>Email:</label>
          <Input type='text' name='email'/>
        </Form.Field>
        <Form.Field>
          <label>Password:</label>
          <Input type='password' name='password'/>
        </Form.Field>
        <Segment padded>
          <Button fluid color='yellow' type='submit' value='submit'>Login</Button>
          <Divider horizontal>Or</Divider>
          <Button fluid secondary onClick={(e)=>{console.log(this.props.router)}}>Sign Up</Button>
        </Segment>
        <Message>
          <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

export default withRouter(LoginForm)

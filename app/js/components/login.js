import React, { Component } from 'react'

import { Button, Checkbox, Form, Input, Message, Radio, Select, TextArea } from 'semantic-ui-react'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { serializedForm: {} }
    this.handleChange = (e, { value }) => this.setState({ value })
    this.handleSubmit = (e, serializedForm) => {
      e.preventDefault()
      this.setState({ serializedForm })
    }
  }

  render() {
    const { serializedForm, value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Enter Password</label>
          <Input type='password' />
        </Form.Field>
        <Button primary type='submit'>Submit</Button>


        <Message>
          <pre>serializedForm: {JSON.stringify(serializedForm, null, 2)}</pre>
        </Message>
      </Form>
    )
  }
}

export default Login

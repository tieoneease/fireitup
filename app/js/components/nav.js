import React, { Component } from 'react'
import { Container, Menu, Segment } from 'semantic-ui-react'
import { Link, withRouter } from 'react-router'

class Nav extends Component {
  state = { activeItem: 'home' }

  static contextTypes = { router: React.PropTypes.object }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    //console.log(this.context.router)
    let path = `/${name}`
    if (name === 'home')
      path = '/'
    this.context.router.push(path)
  }

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted fluid secondary>
          <Menu.Item color='yellow' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item color='yellow' name='connections' active={activeItem === 'connections'} onClick={this.handleItemClick} />
          <Menu.Item color='yellow' name='friends' active={activeItem === 'friends'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}

export default withRouter(Nav)

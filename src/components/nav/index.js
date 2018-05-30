import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu } from 'antd';
import logo  from '../../style/logo.png';
var LogoStyle = {
    width: "25%"
}
class MainNav extends Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
        
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
      <Menu.Item 
            key="logo"
		    className="menu-logo">
         <Link to={{pathname: '/'}}> 
         <img className="logo" src={logo} alt="logo" style={LogoStyle} /> </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(MainNav);
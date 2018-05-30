import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Menu, Row, Col, Button } from 'antd';
import logo  from '../../style/logo.png';
var LogoStyle = {
    width: "30%"
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
      <Row>
        <Col span={16} style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>
      <Menu.Item 
            key="logo"
		    className="menu-logo">
         <Link to={{pathname: '/'}}> 
         <img className="logo" src={logo} alt="logo" style={LogoStyle} /> </Link>
        </Menu.Item>
        </Col>
        <Col span={2} offset={4} style={{ paddingTop: 20, paddingBottom: 10}}>
        <Menu.Item key="Login">
        <Link to={"/"}><Button>LOGIN</Button></Link>
        </Menu.Item>
        </Col>

        <Col span={1} style={{ paddingTop: 20, paddingBottom: 10}}>
        <Menu.Item key="Register">
        <Link to={"/register"}><Button>REGISTER</Button></Link>
        </Menu.Item>
        </Col>
        </Row>
      </Menu>
    );
  }
}

export default withRouter(MainNav);
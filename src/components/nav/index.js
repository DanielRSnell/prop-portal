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
      <Row type="flex" style={{marginTop: ".5rem", marginBottom: ".5rem"}}>
      <Col span={12} align="start" style={{marginLeft: "1rem"}}>
      <Menu.Item 
            key="logo"
		    className="menu-logo">
         <Link to={{pathname: '/'}}> 
         <img className="logo" src={logo} alt="logo" style={LogoStyle} /> </Link>
        </Menu.Item>
        </Col>
        <Col span={2} offset={7} align="end" style={{marginRight: "1rem"}}>
        <Menu.Item key="Login">
        <Link to={"/"}><Button >LOGIN</Button></Link>
        </Menu.Item>
        </Col>
        <Col span={2} align="end" style={{marginRight: "1rem"}}> 
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
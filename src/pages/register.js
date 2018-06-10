import React, { Component } from 'react';
import { Col, Row } from 'antd';
import WrappedRegistrationForm from '../components/register'
import logo from '../style/logo.png';

const propStyles = {
    background: "white",
    padding: "2%",
    borderRadius: "10px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)"
}

class Register extends Component {
    render() {
        return (
        <Row type="flex" style={{marginTop: 125}} justify="space-around">
            <Col span={7} style={propStyles}>
            <Row type="flex" justify="space-around" align="middle" style={{marginBottom: "2rem"}}>
                <img src={logo} style={{width: "90%"}} />
            </Row>
            <Row>
            <WrappedRegistrationForm />
            </Row>
            </Col>
        </Row>
        )
    }
}

export default Register;
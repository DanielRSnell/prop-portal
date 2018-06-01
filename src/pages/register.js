import React, { Component } from 'react';
import { Col, Row } from 'antd';
import WrappedRegistrationForm from '../components/register'
import logo from '../style/logo.png';
class Register extends Component {
    render() {
        return (
        <Row type="flex" style={{marginTop: 125}} justify="space-around">
            <Col span={6}>
            <Row type="flex" justify="space-around" align="middle" style={{marginBottom: "2rem"}}>
                <img src={logo} style={{width: "100%"}} />
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
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import WrappedRegistrationForm from '../components/register'

class Register extends Component {
    render() {
        return (
        <Row style={{marginTop: 50}} align="middle">
            <Col offset={6} span={8}>
            <WrappedRegistrationForm />
            </Col>
        </Row>
        )
    }
}

export default Register;
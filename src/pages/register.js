import React, { Component } from 'react';
import { Col, Row } from 'antd';
import WrappedRegistrationForm from '../components/register'

class Register extends Component {
    render() {
        return (
        <Row type="flex" style={{marginTop: 50}} justify="space-around">
            <Col span={8}>
            <WrappedRegistrationForm />
            </Col>
        </Row>
        )
    }
}

export default Register;
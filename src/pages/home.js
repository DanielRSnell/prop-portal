import React, { Component } from 'react';
import ContatoForm from '../components/Login';
import { Row, Col } from 'antd';
import logo from '../style/logo.png';
class Home extends Component {
    render() {
        return (
            <Row type="flex" style={{marginTop: 125}} justify="space-around">
            <Col span={6}>
            <Row type="flex" justify="space-around" align="middle" style={{marginBottom: "2rem"}}>
                <img src={logo} style={{width: "100%"}} />
            </Row>
            <Row>
                <ContatoForm />
                </Row>
            </Col>
            </Row>
        )
    }
}

export default Home;
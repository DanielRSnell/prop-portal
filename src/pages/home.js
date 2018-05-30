import React, { Component } from 'react';
import ContatoForm from '../components/Login';
import { Row, Col } from 'antd';
class Home extends Component {
    render() {
        return (
            <Row type="flex" style={{marginTop: 200}} justify="space-around">
            <Col span={6}>
                <ContatoForm />
            </Col>
            </Row>
        )
    }
}

export default Home;
import React, { Component } from 'react';
import ContatoForm from '../components/Login';
import { Row, Col } from 'antd';
class Home extends Component {
    render() {
        return (
            <Row style={{margin: "4rem"}}>
            <Col offset={8} span={8}>
                <ContatoForm />
            </Col>
            </Row>
        )
    }
}

export default Home;
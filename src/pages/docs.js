import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Uploader from '../components/uploader';
import MainNav from '../components/nav';

const StyleProps = {
    boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)",
    background: "#fff",
    padding: 10,
    marginTop: 100
}


class DocUpload extends Component {

    render() {
        return (
                <Row>
                <MainNav />
                <Row type="flex" align="middle" justify="space-around">
                <Col span={12} style={StyleProps}>
                <Uploader />
                </Col>
                </Row>
                </Row>
        );
    }
}

export default DocUpload;
import React, { Component } from 'react';
import Maint from '../components/maint';
import MainNav from '../components/nav';
import { Row, Col } from 'antd';

class Request extends Component {
    render() {
        return (
            <Row>
            <MainNav />
            <Maint />
            </Row>
        )
    }
}

export default Request;
import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

const PayBarProps = {
}

class ProfilePayBar extends Component {
    render() {
        return (
            <Row type="flex" justify="space-between" align="center" style={PayBarProps}>
            <Col className="payment__amount">
            <span style={{fontSize: "1.25rem", fontWeight: "bold", paddingLeft: 10}}>$1,850.00</span>
            </Col>
            <Col className="payment__due">
            <span style={{fontSize: "1.25rem", fontWeight: "bold"}}>01/05/2018</span>
            </Col>
            <Col className="payment__button">
            <Button type="primary"> Pay Now</Button>
            </Col>
            </Row>
        )
    }
}

export default ProfilePayBar;
import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';

const { TextArea } = Input;

const propStyles = {
    background: "white",
    padding: "2%",
    borderRadius: "5px",
    boxShadow: "0 1px 5px rgba(0, 0, 0, 0.15)"
}

class Maint extends Component {
    render() {
        return (
            <Row type="flex" style={{marginTop: 125}} justify="space-around">
            <Col span={8} style={propStyles}>
            <Row className="form__title">
            <h2>Maintenance Request</h2>
            </Row>
            <Row className="text__header" style={{marginTop: 25}}>
            <Input size="large" placeholder="Name Your Request" />
            </Row>
            <Row className="text__header" style={{marginTop: 25}}>
            <Input size="large" placeholder="Email Address" />
            </Row>
            <Row className="text__header" style={{marginTop: 25}}>
            <Input size="large" placeholder="Property Address" />
            </Row>
            <Row className="text__area" style={{marginTop: 25}}>
            <TextArea size="large" placeholder="Describe the issue here"/>
            </Row>
            <Row className="text__button" style={{marginTop: 35}}>
            <Button type="primary">Submit Request</Button>
            </Row>
            </Col>
            </Row>
        )
    }
}

export default Maint;
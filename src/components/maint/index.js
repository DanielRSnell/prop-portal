import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';

const { TextArea } = Input;

class Maint extends Component {
    render() {
        return (
            <Row type="flex" style={{marginTop: 125}} justify="space-around">
            <Col span={8}>
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
            <Button type="primary" size="large">Submit Request</Button>
            </Row>
            </Col>
            </Row>
        )
    }
}

export default Maint;
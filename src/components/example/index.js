import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row } from "antd";
class ExampleLinks extends Component {
    render() {
        return (
            <Row type="flex" justify="space-around" className="example__links" style={{marginTop: 25}}>
            <Link to={"/maintenance-request"}>Maintenance Request Form</Link>
            </Row>
        )
    }
}

export default ExampleLinks;
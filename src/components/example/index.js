import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row } from "antd";
class ExampleLinks extends Component {
    render() {
        return (
            <Row type="flex" align="center" className="example__links" style={{marginTop: 25}}>
            <div style={{padding: 10}}>
            
            <Link to={"/maintenance-request"}>Maintenance Request Form</Link>
            </div>
            <div style={{padding: 10}}>
            <Link to={"/upload"}>Document Uploader</Link>
            </div>
            </Row>
        )
    }
}

export default ExampleLinks;
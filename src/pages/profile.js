import React, { Component } from 'react';
import { Row, Col } from 'antd';
import MainNav from '../components/nav'
import ProfileRequest from '../components/profile/request';
import ProfilePayHistory from '../components/profile/payment';
import ProfilePayBar from '../components/profile/paybar';
const MainProps = {
    marginTop: 50
}

const TableProps = {
    background: "#fff",
    padding: 10,
    boxShadow: "0 1px #FFFFFF inset, 0 1px 3px rgba(34, 25, 25, 0.4)"
}

class ProfilePage extends Component {
    render() {
        return (
            <Row>
                <MainNav />
                <Col span={24}>
                <Row type="flex" align="start" justify="space-around" style={MainProps}>
                <Col span={8}>
                <ProfilePayBar />
                </Col>
                </Row>
                <Row type="flex" align="center" style={MainProps}>
                <Col span={16} className="profile__maint" style={TableProps}>
                <ProfilePayHistory />
                </Col>
                </Row>
                <Row type="flex" align="center" style={MainProps}>
                <Col span={16} className="profile__maint" style={TableProps}>
                <ProfileRequest />
                </Col>
                </Row>
                </Col>
            </Row>
        )
    }
}

export default ProfilePage;
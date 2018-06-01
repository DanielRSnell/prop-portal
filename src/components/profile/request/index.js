import React, { Component } from 'react';
import { Col, Table, Row, Tag } from 'antd';

const StatusCheck = (prop) => {
    if ( prop === "Pending" ) {
        return <Tag color="#f50">Pending</Tag>
    } else if ( prop === "Complete" ) {
        return <Tag color="#87d068">Complete</Tag>
    } else if ( prop === "Review" ) {
        return <Tag color="#2db7f5">Review</Tag>
    }
}

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
}, 
{
    title: 'Description',
    dataIndex: 'desc',
    key: 'desc'
}, 
{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (StatusCheck(status))
}]

const data = [
    {
        "name": "Request Number 1",
        "date": "01/01/2018",
        "email": "jack@example.com",
        "address": "5252 Example Lane",
        "desc": "This is just an example request to show you what an example request would look like.",
        "status": "Pending"
    },
     {
        "name": "Request Number 2",
        "date": "01/01/2018",
        "email": "jack@example.com",
        "address": "5252 Example Lane",
        "desc": "This is just an example request to show you what an example request would look like.",
        "status": "Complete"
     },
     {
        "name": "Request Number 3",
        "date": "01/01/2018",
        "email": "jack@example.com",
        "address": "5252 Example Lane",
        "desc": "This is just an example request to show you what an example request would look like.",
        "status": "Complete"
     },
     {
        "name": "Request Number 4",
        "date": "01/01/2018",
        "email": "jack@example.com",
        "address": "5252 Example Lane",
        "desc": "This is just an example request to show you what an example request would look like.",
        "status": "Review"
     }
];

class ProfileRequest extends Component {
    render() {
        console.log(data);
        return (
            <Table
            title={() => (<h2 style={{fontWeight: "bold"}}>Mainteniance Requests</h2>)} 
            Pagination={"false"}
            columns={columns} 
            dataSource={data} 
            />
        )
    }
}
export default ProfileRequest;
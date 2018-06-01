import React, { Component } from 'react';
import { Col, Table, Row, Tag } from 'antd';

const StatusCheck = (prop) => {
    if ( prop === "Pending" ) {
        return <Tag color="#f50">Pending</Tag>
    } else if ( prop === "Complete" ) {
        return <Tag color="#87d068">Complete</Tag>
    } else if ( prop === "Review" ) {
        return <Tag color="#2db7f5">Review</Tag>
    } else if (prop === "Due" ) {
        return <Tag color="#f50">Pending</Tag>
    }
}

const columns = [{
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
},
{
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
},
{
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount'
},
{
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (StatusCheck(status))
}]

const data = [
    {
        date: "01/05/2018",
        type: "Deposit",
        amount: "$1,850.00",
        status: "Complete"
    },
     {
         date: "01/06/2018",
         type: "Rent Payment",
         amount: "$1,850.00",
         status: "Due"
     },
  
];

class ProfilePayHistory extends Component {
    render() {
        console.log(data);
        return (
            <Table
            title={() => (<h2 style={{fontWeight: "bold"}}>Transaction History</h2>)} 
            Pagination={"false"}
            columns={columns} 
            dataSource={data} 
            />
        )
    }
}
export default ProfilePayHistory;
import React from 'react'
import { Link } from 'react-router-dom';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;

class Contato extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
  render() {
   const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Row type="flex" >
          <Col span={4}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          </Col>
          <Col span={4} offset={2}>
          <Button className="register-now-button" style={{paddingLeft: 10}}>
            Register
          </Button>
          </Col>
          </Row>
        </FormItem>
      </Form>
    );
  }
}

const ContatoForm = Form.create({})(Contato);

export {ContatoForm};
export default ContatoForm;
import React from 'react';
import { Layout, Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {AuthContext} from './../utils/authContex';
const { Content } = Layout;

function Login() {

  const {signIn} = React.useContext(AuthContext)

  const onFinish = (values) => {
    signIn(values.username);
  };

  return (
    <Layout className='centered'>
      <Content className='centered' style={{border:5, borderColor:'#00f'}}>
        <Card 
          bordered 
          style={{borderRadius:7, width:430, height:400, justifyContent:'center', alignSelf:'center'}}
          className='centered'
          
        >
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size='large'
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input 
              style={{borderRadius:3}} 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="Username" 
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              style={{borderRadius:3}}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              className="login-form-button"
              size='middle'
              style={{width:'100%', borderRadius:3}}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
        </Card>
      </Content>
    </Layout>
  );
}

export default Login;

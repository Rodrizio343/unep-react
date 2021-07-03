import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {

    const [,navigate] = useLocation()
    const {isLogged, login} = useUser()

    useEffect(() => {
      if(isLogged) navigate('/')
    }, [isLogged, navigate])

    const onFinish = async ({email, password}) => {
    try {
        login({email, password})
    } catch (error) {
        console.log(error)
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{height:"100vh", width:"100%",  display: "flex", justifyContent:"center", alignItems:"center"}}>
        <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{ required: true, message: "Please input your mail!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};

export default Login;

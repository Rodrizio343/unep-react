import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import useRegister from "hooks/useRegister";
import Success from "components/Modals/Success";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const { register, setRegistered } = useRegister();
  const [modalVisibility, setModalVisibility] = useState(false);

  const onFinish = async ({ username, email, password, passwordRepeat }) => {
    if (password === passwordRepeat) {
      register({ username, email, password });
      setRegistered(true);
      setModalVisibility(true);
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  // if(registered) return <p>Registro exitoso</p>

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
            rules={[
              { required: true, message: "Por favor, ingresa tu e-mail" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Usuario"
            name="username"
            rules={[
              { required: true, message: "Por favor, ingresa tu usuario" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Por favor, ingresa tu contraseña" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Repetir contraseña"
            name="passwordRepeat"
            rules={[
              { required: true, message: "Por favor, repite la contraseña" },
            ]}
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
      <Success
        modalVisibility={modalVisibility}
        title="Registro exitoso"
        message="Te has registrado con exito! Vuelve a home para descubrir más."
        route="/"
      />
    </>
  );
};

export default Register;

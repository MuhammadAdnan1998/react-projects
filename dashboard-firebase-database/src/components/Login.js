import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      message.success("Login successful!");
    } catch (error) {
      message.error("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} className="w-full">
        Login
      </Button>
    </Form>
  );
};

export default Login;
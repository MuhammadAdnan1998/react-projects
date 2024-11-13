import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await addDoc(collection(db, "users"), {
        uid: userCredential.user.uid,
        email,
      });
      message.success("User registered successfully");
    } catch (error) {
      message.error("Error creating account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form layout="vertical" onFinish={onFinish} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, min: 6 }]}>
        <Input.Password />
      </Form.Item>
      <Button type="primary" htmlType="submit" loading={loading} className="w-full">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;

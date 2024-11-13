import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { Form, Input, Button, Table, message, Modal } from "antd";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    const snapshot = await getDocs(collection(db, "posts"));
    setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const addPost = async (values) => {
    await addDoc(collection(db, "posts"), values);
    message.success("Post added successfully");
    fetchPosts();
  };

  const updatePost = async (values) => {
    await updateDoc(doc(db, "posts", editPost.id), values);
    message.success("Post updated successfully");
    setEditPost(null);
    fetchPosts();
  };

  const deletePost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    message.success("Post deleted successfully");
    fetchPosts();
  };

  return (
    <div className="p-4">
      <Button type="primary" onClick={() => setIsModalVisible(true)} className="mb-4">
        Add Post
      </Button>
      <Table
        dataSource={posts}
        loading={loading}
        rowKey="id"
        columns={[
          { title: "Title", dataIndex: "title", key: "title" },
          { title: "Content", dataIndex: "content", key: "content" },
          {
            title: "Actions",
            render: (text, record) => (
              <span>
                <Button onClick={() => setEditPost(record)}>Edit</Button>
                <Button danger onClick={() => deletePost(record.id)}>Delete</Button>
              </span>
            ),
          },
        ]}
      />
      <Modal
        visible={isModalVisible || !!editPost}
        onCancel={() => {
          setIsModalVisible(false);
          setEditPost(null);
        }}
        onOk={() => {
          editPost ? updatePost(editPost) : addPost(editPost);
        }}
      >
        <Form layout="vertical" initialValues={editPost || {}}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Post;
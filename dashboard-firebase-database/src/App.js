// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Dashboard from './components/Dashboard';
import Post from './components/Post'; 
import Comment from './components/Comment';
import Album from './components/Album';
import Photo from './components/Photo';
import Todo from './components/Todo';
import User from './components/Users'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/posts" element={<Post />} />
        <Route path="/comments" element={<Comment />} />
        <Route path="/albums" element={<Album />} />
        <Route path="/photos" element={<Photo />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/users" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;

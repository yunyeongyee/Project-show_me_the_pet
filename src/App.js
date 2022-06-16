import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*COMPONENTS*/
import Header from './components/Header';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import SignUp from './components/SignUp';
import Login from './components/Login';
/*CSS*/
import './App.css';
function App() {
   return (
      <div className="App">
         <Header />
         <Routes>
            <Route path="/header" element={<Header />} />
            <Route path="/" element={<PostList />} />
            <Route path="/edit/:boardid" element={<PostList />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/AddPost" element={<AddPost />} />
         </Routes>
      </div>
   );
}

export default App;

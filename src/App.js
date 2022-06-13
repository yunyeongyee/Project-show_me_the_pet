import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*COMPONENTS*/
import Header from './components/Header';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
// import DeletePost from './components/DeletePost';
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
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/PostList" element={<PostList />} />
            <Route path="/AddPost" element={<AddPost />} />
            {/* <Route path="/DeletePost" element={<DeletePost />} /> */}
         </Routes>
      </div>
   );
}

export default App;

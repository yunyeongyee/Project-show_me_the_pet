import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*COMPONENTS*/
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import SignUp from './components/SignUp';
import Login from './components/Login';
/*CSS*/
import './App.css';
function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/PostList" element={<PostList />} />
            <Route path="/AddPost" element={<AddPost />} />
         </Routes>
      </div>
   );
}

export default App;

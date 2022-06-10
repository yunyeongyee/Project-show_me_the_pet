import React from 'react';
import { Routes, Route } from 'react-router-dom';
/*COMPONENTS*/
import PostList from './components/PostList';
import AddPost from './components/AddPost';
/*CSS*/
import './App.css';
function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/PostList" element={<PostList />} />
            <Route path="/AddPost" element={<AddPost />} />
            <Route />
         </Routes>
      </div>
   );
}

export default App;

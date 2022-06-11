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
<<<<<<< HEAD
            <Route />
=======
>>>>>>> f550fd470d459b426693534b1821acdcab18795e
         </Routes>
      </div>
   );
}

export default App;

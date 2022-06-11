import * as React from 'react';
import { useNavigate } from 'react-router-dom';
/*CSS*/
import '../App.css';
<<<<<<< HEAD
const UploadBtn = () => {
   const navigate = useNavigate();
   return (
=======

const UploadBtn = () => {
   const navigate = useNavigate();

   return (  
>>>>>>> post
   <footer className="Footer">
          <button
             className="AddBtn"
             onClick={()=> {
                window.location.replace('/AddPost');
             }}
             sx={{ fontSize: 70 }}
          >Add</button>
       </footer>
<<<<<<< HEAD
   );
};
export default UploadBtn;
=======


   );
};
export default UploadBtn;
>>>>>>> post

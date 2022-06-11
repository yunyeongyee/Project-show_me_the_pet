import * as React from 'react';
import { useNavigate } from 'react-router-dom';
/*CSS*/
import '../App.css';

const UploadBtn = () => {
   const navigate = useNavigate();

   return (  
   <footer className="Footer">
          <button
             className="AddBtn"
             onClick={()=> {
                window.location.replace('/AddPost');
             }}
             sx={{ fontSize: 70 }}
          >Add</button>
       </footer>


   );
};
export default UploadBtn;

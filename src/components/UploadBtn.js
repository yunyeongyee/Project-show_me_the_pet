import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudPlus } from '@fortawesome/free-solid-svg-icons';
/*CSS*/
import '../App.css';
const UploadBtn = () => {
   const navigate = useNavigate();
   return (
   <footer className="Footer">
          
 
 
<FontAwesomeIcon icon="faRegular faCloudPlus"  className="AddBtn"
             onClick={()=> {
                window.location.replace('/AddPost');
             }}/>
       </footer>
   );
};
export default UploadBtn;
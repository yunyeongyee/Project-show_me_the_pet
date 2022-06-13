import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';
/*CSS*/
import '../App.css';
const UploadBtn = () => {
   const navigate = useNavigate();
   return (
      <footer className="Footer">
         <FontAwesomeIcon
            style={{ fontSize: 70, display: 'block', position: 'fixed',  bottom: 0, 
  right: 0, margin: 10}}
            icon={faCloudArrowUp}
            onClick={() => {
               navigate('/AddPost');
            }}
         />
      </footer>
   );
};
export default UploadBtn;
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Modal = ({ _handleModal, children, ...rest }) => {
    return (
       <ModalContainer>
          <BackgroundBlur onClick={_handleModal} />
          <ModalBlock {...rest}>
             <FontAwesomeIcon
                icon={faXmark}
                onClick={_handleModal}
                style={{
                   margin: 5,
                   fontSize: 25,
                   position: 'absolute',
                   right: 3,
                   top: 3,
                   cursor: 'pointer',
                }}
             />
          </ModalBlock>
       </ModalContainer>
    );
};

const ModalContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: 100;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const BackgroundBlur = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.15);
   backdrop-filter: blur(5px);
   animation: modal-bg-show 1s;
   @keyframes modal-bg-show {
      from {
         opacity: 0;
      }
      to {
         opacity: 1;
      }
   }
`;

const ModalBlock = styled.div`
   position: absolute;
   top: 6.5rem;
   border-radius: 10px;
   padding: 1.5rem;
   background-color: black;
   width: 60rem;
   @media (max-width: 1120px) {
      width: 50rem;
   }
   @media (max-width: 50rem) {
      width: 80%;
   }
   min-height: 35rem;
   animation: modal-show 1s;
   @keyframes modal-show {
      from {
         opacity: 0;
         margin-top: -50px;
      }
      to {
         opacity: 1;
         margin-top: 0;
      }
   }
`;

// const Contents = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

export default Modal;

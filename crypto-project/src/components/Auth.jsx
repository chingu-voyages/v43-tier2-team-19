import React from 'react';
import { createPortal } from 'react-dom';

import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const modalRoot = document.querySelector('#modal-root');

const Auth = ({ onClose }) => {
  return createPortal(
    <div>
      {onClose.name === 'toggleLoginModal' ? (
        <LoginModal onClose={onClose} />
      ) : (
        <SignUpModal onClose={onClose} />
      )}
      <div>
        <span>OR</span>
      </div>

      <button type="button">Continue with Google</button>
      <button type="button">Continue with Facebook</button>
    </div>,
    modalRoot
  );
};

export default Auth;

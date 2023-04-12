import React from 'react';
import { createPortal } from 'react-dom';

import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

const modalRoot = document.querySelector('#modal-root');

const Auth = ({ onClose, action }) => {
  const isLogin = action === 'login';
  const modalContent = isLogin ? (
    <LoginModal onClose={onClose} />
  ) : (
    <SignUpModal onClose={onClose} />
  );

  return createPortal(
    <div>
      {modalContent}
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

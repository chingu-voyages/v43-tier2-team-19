import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import { useNavigate } from 'react-router';
import { useUserContext } from '../context/userContext';

const modalRoot = document.querySelector('#modal-root');

const Auth = ({ onClose, action }) => {
  const navigate = useNavigate();

  const { user, signInWithGoogle, signInWithFacebook } = useUserContext();

  useEffect(() => {
    if (user) navigate('/');
  }, [navigate, user]);

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

      <button onClick={signInWithGoogle}>Continue with Google</button>
      <button onClick={signInWithFacebook}>Continue with Facebook</button>
    </div>,
    modalRoot
  );
};

export default Auth;

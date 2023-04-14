import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { LoginModal } from '../Modals';
import { SignUpModal } from '../Modals';
import { useNavigate } from 'react-router';
import { useUserContext } from '../../context/userContext';
import { Btn, Divider, Modal, ModalContent, Span } from './Auth.styled';

const modalRoot = document.querySelector('#modal-root');

export const Auth = ({ onClose, action }) => {
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
    <Modal>
      <ModalContent>
        {modalContent}
        <Divider>
          <Span>OR</Span>
        </Divider>

        <Btn onClick={signInWithGoogle}>Continue with Google</Btn>
        <Btn onClick={signInWithFacebook}>Continue with Facebook</Btn>
      </ModalContent>
    </Modal>,
    modalRoot
  );
};

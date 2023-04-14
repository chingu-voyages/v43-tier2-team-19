import React, { useEffect, useRef, useState } from 'react';
import { SignUpModal } from './SignUpModal';
import {
  Btn,
  Container,
  Form,
  Input,
  Label,
  Login,
  Toggle,
} from './Modals.styled';

export const LoginModal = ({ onClose }) => {
  const emailRef = useRef();
  const pswrdRef = useRef();
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  useEffect(() => {
    const closeModalOnEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', closeModalOnEsc);

    return () => window.removeEventListener('keydown', closeModalOnEsc);
  }, [onClose]);

  const closeModal = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const toggleSignUpModal = () => setShowSignUpModal(!showSignUpModal);

  if (showSignUpModal) return <SignUpModal onClose={toggleSignUpModal} />;

  return (
    <Container onClick={closeModal}>
      <Login>Login to track your favorite coin easily 🚀</Login>
      <Form onSubmit={onSubmit}>
        <Label>
          Email
          <Input
            type="email"
            placeholder="example@gmail.com"
            autoComplete="on"
            ref={emailRef}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            placeholder="********"
            autoComplete="on"
            ref={pswrdRef}
          />
        </Label>
        <Btn type="submit">Login</Btn>
      </Form>

      <Toggle>
        Don't have an account? <span onClick={toggleSignUpModal}>Sign Up</span>
      </Toggle>
    </Container>
  );
};

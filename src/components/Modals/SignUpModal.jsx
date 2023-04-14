import React, { useRef, useState, useEffect } from 'react';
import { LoginModal } from './LoginModal';
import { useUserContext } from '../../context/userContext';
import {
  Btn,
  Container,
  Form,
  Input,
  Label,
  Login,
  Toggle,
} from './Modals.styled';

export const SignUpModal = ({ onClose }) => {
  const emailRef = useRef();
  const pswrdRef = useRef();

  const { signUp } = useUserContext();
  const [showLoginModal, setShowLoginModal] = useState(false);

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
    const email = emailRef.current.value;
    const pswrd = pswrdRef.current.value;

    if (email && pswrd) signUp(email, pswrd);
  };

  const toggleLoginModal = (e) => setShowLoginModal(!showLoginModal);

  if (showLoginModal) return <LoginModal onClose={toggleLoginModal} />;

  return (
    <Container onClick={closeModal}>
      <Login>It is so easy track your favorite coin with us 🚀</Login>
      <Form onSubmit={onSubmit}>
        <Label>
          Email
          <Input
            type="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            ref={emailRef}
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            placeholder="********"
            autoComplete="off"
            ref={pswrdRef}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$"
            title="Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
          />
        </Label>

        <Btn type="submit">Sign Up</Btn>
      </Form>

      <Toggle>
        Already have an account? <span onClick={toggleLoginModal}>Login</span>
      </Toggle>
    </Container>
  );
};

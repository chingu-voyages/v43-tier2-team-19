import React, { useRef, useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import { useUserContext } from '../context/userContext';

const SignUpModal = ({ onClose }) => {
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
    <div onClick={closeModal}>
      <h2>It is so easy track your favorite coin with us 🚀</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="example@gmail.com"
            autoComplete="off"
            ref={emailRef}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="********"
            autoComplete="off"
            ref={pswrdRef}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$"
            title="Password must contain at least 8 characters including 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character."
          />
        </label>

        <p>
          Password must contain at least 8 characters including 1 uppercase
          letter, 1 lowercase letter, 1 number, and 1 special character.
        </p>

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account? <span onClick={toggleLoginModal}>Login</span>
      </p>
    </div>
  );
};

export default SignUpModal;

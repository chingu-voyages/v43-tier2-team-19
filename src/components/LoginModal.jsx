import React, { useEffect, useRef, useState } from 'react';
import SignUpModal from './SignUpModal';

const LoginModal = ({ onClose }) => {
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
    <div onClick={closeModal}>
      <h2>Login to track your favorite coin easily 🚀</h2>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input
            type="email"
            placeholder="example@gmail.com"
            autoComplete="on"
            ref={emailRef}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="********"
            autoComplete="on"
            ref={pswrdRef}
          />
        </label>
        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <span onClick={toggleSignUpModal}>Sign Up</span>
      </p>
    </div>
  );
};

export default LoginModal;

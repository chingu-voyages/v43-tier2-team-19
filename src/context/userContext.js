import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

export const UserContext = createContext({});

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const AuthState = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError('');
      setLoading(false);
    });

    return AuthState;
  }, []);

  const signUp = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      updateProfile(newUser.currentUser);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  const signInWithGoogle = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, new GoogleAuthProvider());
      setLoading(false);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  const signInWithFacebook = async (email, password) => {
    try {
      setLoading(true);
      setError('');
      await signInWithPopup(auth, new FacebookAuthProvider());
      setLoading(false);
      navigate('/');
    } catch (error) {
      setError(error);
    }
  };

  const signOutUser = () => {
    signOut(auth);
    navigate('/login');
  };

  const contextDetails = {
    user,
    loading,
    error,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithFacebook,
    signOutUser,
  };

  return (
    <UserContext.Provider value={contextDetails}>
      {children}
    </UserContext.Provider>
  );
};

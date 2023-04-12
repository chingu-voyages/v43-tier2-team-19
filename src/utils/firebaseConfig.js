import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAfi8Q_SBS8DkTtIP_L1wH7AFfaMx4d9hA',
  authDomain: 'cryptopulse-e99e2.firebaseapp.com',
  projectId: 'cryptopulse-e99e2',
  storageBucket: 'cryptopulse-e99e2.appspot.com',
  messagingSenderId: '815879616344',
  appId: '1:815879616344:web:a4b45f24406775c969d72d',
  measurementId: 'G-63FVN6N3RT',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

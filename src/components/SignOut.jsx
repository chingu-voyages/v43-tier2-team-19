import { useUserContext } from '../context/userContext';

export const SignOut = () => {
  const { signOutUser } = useUserContext();

  return (
    <button type="button" onClick={signOutUser}>
      Sign Out
    </button>
  );
};

import { useUserContext } from '../../context/userContext';
import { Btn } from './Navbar.styled';

export const SignOut = () => {
  const { signOutUser } = useUserContext();

  return (
    <Btn type="button" onClick={signOutUser}>
      Sign Out
    </Btn>
  );
};

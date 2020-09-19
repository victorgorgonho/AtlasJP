import { environment } from '../environment/environment';
import { UserState } from '../store/ducks/user/types';

const {
  REACT_APP_LOCAL_STORAGE_USER,
} = environment;

const userAuth: UserState = {
  user: JSON.parse(localStorage.getItem(REACT_APP_LOCAL_STORAGE_USER) as string),
};

export const isAuthenticated = () => {
  if (userAuth.user.email === 'josegorgonho@eng.ci.ufpb.br') {
    return true;
  }
  return false;
};


export const getToken = () => {
  userAuth.user.token = String(
    JSON.parse(userAuth.user.token),
  );
  if (userAuth.user.token !== '') {
    return userAuth.user.token;
  }
  return '';
};

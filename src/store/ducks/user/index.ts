import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';
import { environment } from '../../../environment/environment';

const INITIAL_STATE: UserState = {
  user: {
    id: '',
    token: '',
    email: '',
    name: '',
  },
};

const reducer: Reducer<UserState> = (
  state = INITIAL_STATE,
  action,
) => {
  const updatedUserState = state;
  const address = environment.REACT_APP_LOCAL_STORAGE_USER;

  switch (action.type) {
    case UserTypes.UPDATE_USER:
      updatedUserState.user = action.data.user;

      localStorage.setItem(
        address,
        JSON.stringify(updatedUserState.user),
      );

      return { ...state, ...updatedUserState };

    case UserTypes.REMOVE_USER:
      // localStorage.removeItem(
      //   environment.REACT_APP_LOCAL_STORAGE_USER_AUTH,
      // );
      return { ...state, ...INITIAL_STATE };

    default:
      return state;
  }
};

export default reducer;

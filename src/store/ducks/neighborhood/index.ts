import { Reducer } from 'redux';
import { NeighborhoodState, NeighborhoodTypes } from './types';

const INITIAL_STATE: NeighborhoodState = {
  neighborhood: {
    id: 0,
    name: '',
    image_url: '',
    location: [0, 0],
  },
};

const reducer: Reducer<NeighborhoodState> = (
  state = INITIAL_STATE,
  action,
) => {
  const updatedNeighborhoodState = state;

  switch (action.type) {
    case NeighborhoodTypes.CREATE_NEIGHBORHOOD:
      updatedNeighborhoodState.neighborhood = action.payload.data.neighborhood;
      // localStorage.setItem(
      //   environment.REACT_APP_LOCAL_STORAGE_USER_AUTH,
      //   JSON.stringify(),
      // );

      return { ...state, ...updatedNeighborhoodState };

    default:
      return state;
  }
};

export default reducer;

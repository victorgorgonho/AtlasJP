import {
  NeighborhoodTypes, NeighborhoodState,
} from './types';

export const createNeighborhood = (data: NeighborhoodState) => {
  return { type: NeighborhoodTypes.CREATE_NEIGHBORHOOD, payload: { data } }
};

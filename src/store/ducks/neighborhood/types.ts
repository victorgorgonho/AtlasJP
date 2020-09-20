/**
 * Action types
 * @CREATE_NEIGHBORHOOD Set Neighborhood
 */
export enum NeighborhoodTypes {
  CREATE_NEIGHBORHOOD = '@AtlasJP/CREATE_NEIGHBORHOOD',
}

export interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

/**
 * State type
 * @data : the AtlasJP
 */
export interface NeighborhoodState {
  neighborhood: Neighborhood
}  
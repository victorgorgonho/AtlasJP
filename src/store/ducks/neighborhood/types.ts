/**
 * Action types
 * @CREATE_NEIGHBORHOOD Set Neighborhood
 */
export enum NeighborhoodTypes {
  CREATE_NEIGHBORHOOD = '@constructionCompany/CREATE_NEIGHBORHOOD',
}

export interface Neighborhood {
  id: number;
  name: string;
  image_url: string;
  location: [number, number];
}

/**
 * State type
 * @data : the constructionCompany
 */
export interface NeighborhoodState {
  neighborhood: Neighborhood
}  
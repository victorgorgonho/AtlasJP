/**
 * Action types
 * @UPDATE_USER update user infos
 * @REMOVE_USER remove user infos
 */
export enum UserTypes {
  UPDATE_USER = '@AtlasJP/HANDLE_USER',
  REMOVE_USER = '@AtlasJP/REMOVE_USER',
}

/**
 * Data types
 * @token : token of user
 * @name : name of user
 */

export interface User {
  id: string
  token: string
  email: string
  name: string
}

/**
 * State type
 * @data : the AtlasJP
 */
export interface UserState {
  user: User
}  
import { combineReducers } from 'redux';

import user from './user';
import neighborhood from './neighborhood';

export default combineReducers({
  user,
  neighborhood,
});

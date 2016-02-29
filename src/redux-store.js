import { combineReducers } from 'redux';

import songsReducer from './ducks/songs';

const rootReducer = combineReducers({
  songs: songsReducer
});

export default rootReducer;

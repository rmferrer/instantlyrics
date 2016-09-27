import { combineReducers } from 'redux';

import songsReducer from './ducks/songs';
import selectedSongReducer from './ducks/selected_song';

const rootReducer = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

export default rootReducer;

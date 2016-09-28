/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';

import MusicAPI from '../lib/music_api';

const _action_absolute_name = name => `songs/${name}`;

const INITIAL_SONGS_STATE = {
  exact: null,
  related: []
}

/* ACTION TYPES */
const SEARCH_EXACT_SONG = _action_absolute_name('SEARCH_EXACT_SONG');
const SEARCH_RELATED_SONGS = _action_absolute_name('SEARCH_RELATED_SONGS');
/* END ACTION TYPES */

/********** PUBLIC **********/

/* ACTION CREATORS */
const searchExactSong = createActionCreator(SEARCH_EXACT_SONG, search => {
  return MusicAPI.searchExactSong(search);
});

const searchRelatedSongs = createActionCreator(SEARCH_RELATED_SONGS, search => {
  return MusicAPI.searchRelatedSongs(search);
});

export const searchSongs = search =>
  dispatch => {
    dispatch(searchExactSong(search));
    dispatch(searchRelatedSongs(search));
  }
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SEARCH_EXACT_SONG]: (state, action) => {
    const exact = action.payload.data.data.message.body === "" ? null : action.payload.data.data.message.body;
    return {
      ...state,
      exact
    };
  },
  [SEARCH_RELATED_SONGS]: (state, action) => {
    const related = action.payload.data.data.message.body.track_list;
    return {
      ...state,
      related
    };
  }
}, INITIAL_SONGS_STATE);
/* END REDUCER */

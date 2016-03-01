/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';

import MusixMatch from '../lib/musixmatch';

const _action_absolute_name = name => `songs/${name}`;

/* ACTION TYPES */
const SEARCH_SONGS = _action_absolute_name('SEARCH_SONGS');
/* END ACTION TYPES */

/********** PUBLIC **********/

/* ACTION CREATORS */
export const searchSongs = createActionCreator(SEARCH_SONGS, term => {
  return MusixMatch.searchSongs(term);
});
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SEARCH_SONGS]: (state, action) => {
    return action.payload.data.message.body.track_list;
  }
}, []);
/* END REDUCER */

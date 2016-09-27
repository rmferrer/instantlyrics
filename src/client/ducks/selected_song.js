/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';

import MusixMatch from '../lib/musixmatch';

const _action_absolute_name = name => `selected_song/${name}`;

/* ACTION TYPES */0
const SELECT_SONG = _action_absolute_name('SELECT_SONG');
/* END ACTION TYPES */

/********** PUBLIC **********/

/* ACTION CREATORS */
export const selectSong = createActionCreator(SELECT_SONG, song => {
  const promises = [song, MusixMatch.getLyrics(song.track_id)];
  return Promise.all(promises);
});
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SELECT_SONG]: (state, action) => {
    return {
      song: action.payload[0],
      lyrics: action.payload[1].data.data.message.body.lyrics
    };
  }
}, {});
/* END REDUCER */

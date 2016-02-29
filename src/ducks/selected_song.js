/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';
const _action_absolute_name = name => `selected_song/${name}`;

/* ACTION TYPES */0
const SELECT_SONG = _action_absolute_name('SELECT_SONG');
/* END ACTION TYPES */


/********** PUBLIC **********/

/* ACTION CREATORS */
export const selectSong = createActionCreator(SELECT_SONG, song => song);
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SELECT_SONG]: (state, action) => {
    return action.payload;
  }
}, {});
/* END REDUCER */

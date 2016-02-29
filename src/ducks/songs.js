/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';

const _action_absolute_name = name => `songs/${name}`;

/* ACTION TYPES */
const SEARCH_SONGS = _action_absolute_name('SEARCH_SONGS');
/* END ACTION TYPES */


/********** PUBLIC **********/

/* ACTION CREATORS */
export const searchSongs = createActionCreator(SEARCH_SONGS, term => {
  const ret_val = Math.random();
  console.log(`retval is ${ret_val}`);
  return [ret_val];
});
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SEARCH_SONGS]: (state, action) => {
    return action.payload;
  }
}, []);
/* END REDUCER */

/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';
import axios from 'axios';

const _action_absolute_name = name => `songs/${name}`;

/* ACTION TYPES */
const SEARCH_SONGS = _action_absolute_name('SEARCH_SONGS');
/* END ACTION TYPES */

//const MUSIXMATCH_API_KEY = '194d9075ba3f01dc26abbdf9c7c9914a';
const MUSIXMATCH_ROOT_URL = 'https://www.musixmatch.com/ws/1.1/track.search?guid=728cbca6-600f-4b40-970d-064763544f28&app_id=community-app-v1.0&format=json&f_has_lyrics=1&s_track_rating=desc&s_artist_rating=desc';
/********** PUBLIC **********/

/* ACTION CREATORS */
export const searchSongs = createActionCreator(SEARCH_SONGS, term => {
  const url = `${MUSIXMATCH_ROOT_URL}&q_track=${term}`;
  return axios.get(url);
});
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SEARCH_SONGS]: (state, action) => {
    return action.payload.data.message.body.track_list;
  }
}, []);
/* END REDUCER */

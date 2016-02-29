/********** PRIVATE **********/

import { createAction as createActionCreator, handleActions } from 'redux-actions';
import Faker from 'faker';
import _ from 'lodash';
const _action_absolute_name = name => `songs/${name}`;

/* ACTION TYPES */
const SEARCH_SONGS = _action_absolute_name('SEARCH_SONGS');
/* END ACTION TYPES */


/********** PUBLIC **********/

/* ACTION CREATORS */
export const searchSongs = createActionCreator(SEARCH_SONGS, term => {
  const num_results = Math.floor(Math.random()*10+1);
  const ret_val = _.times(num_results, () =>
    (
      {
        key: Faker.random.number(),
        coverArtUrl: Faker.image.imageUrl(),
        artist: Faker.name.findName(),
        title: Faker.lorem.sentence(),
        lyrics: Faker.lorem.paragraphs()
      }
    )
  );
  return ret_val;
});
/* END ACTION CREATORS */

/* REDUCER for key 'songs' */
export default handleActions({
  [SEARCH_SONGS]: (state, action) => {
    return action.payload;
  }
}, []);
/* END REDUCER */

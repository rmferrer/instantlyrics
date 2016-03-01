import axios from 'axios';
import qp from 'query-parse';
import extend from 'extend';

const MusixMatch = {
  MUSIXMATCH_ROOT_URL : 'https://www.musixmatch.com/ws/1.1',

  BASE_PARAMS : {
    guid: '728cbca6-600f-4b40-970d-064763544f28',
    app_id: 'community-app-v1.0',
    format: 'json'
  },

  searchSongs: function(search_term) {
    const params = extend(
      {
        f_has_lyrics: '1',
        s_track_rating: 'desc',
        s_artist_rating: 'desc',
        q_track: search_term
      }, this.BASE_PARAMS);
    const uri = `${this.MUSIXMATCH_ROOT_URL}/track.search?${qp.toString(params)}`;
    return axios.get(uri);
  },

  getLyrics: function(track_id){
    const params = extend({ track_id }, this.BASE_PARAMS);
    const uri = `${this.MUSIXMATCH_ROOT_URL}/track.lyrics.get?${qp.toString(params)}`;
    return axios.get(uri);
  }
};

export default MusixMatch;
import axios from 'axios';
import qp from 'query-parse';
import extend from 'extend';

const MusixMatch = {
  MUSIXMATCH_ROOT_URL : 'https://api.musixmatch.com/ws/1.1',

  BASE_PARAMS : {
    apikey: '194d9075ba3f01dc26abbdf9c7c9914a',
    app_id: 'rmferrer_personal_app',
    format: 'json',
    f_has_lyrics: '1',
    s_track_rating: 'desc',
    s_artist_rating: 'desc',    
  },

  searchExactSong: function({track, artist, album}) {
    const params = extend(
      {
        q_track: track,
        q_artist: artist,
        q_album: album,
      }, this.BASE_PARAMS);
    const uri = `${this.MUSIXMATCH_ROOT_URL}/matcher.track.get?${qp.toString(params)}`;
    return axios.get(uri);
  },

  searchRelatedSongs: function({track, artist, album}) {
    const params = extend(
      {
        q_track: track,
        q_artist: artist,
        q_album: album,
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
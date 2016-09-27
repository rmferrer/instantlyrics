import axios from 'axios';
import qp from 'query-parse';

const MusixMatch = {
  searchExactSong: function({track, artist, album}) {
    const params = {
        track: track,
        artist: artist,
        album: album,
      };
    const uri = `/api/exactSong?${qp.toString(params)}`;
    return axios.get(uri);
  },

  searchRelatedSongs: function({track, artist, album}) {
    const params = {
        track: track,
        artist: artist,
        album: album,
      };
    const uri = `/api/relatedSongs?${qp.toString(params)}`;
    return axios.get(uri);
  },

  getLyrics: function(track_id){
    const params = { track_id };
    const uri = `/api/lyrics?${qp.toString(params)}`;
    return axios.get(uri);
  }
};

export default MusixMatch;

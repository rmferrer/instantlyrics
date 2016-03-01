import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SongDetail extends Component {
  render(){
    if(_.isEmpty(this.props.selectedSong)){
      return (
        <div className="song-detail col-md-8" />
      );
    }
    const {song_obj, lyrics_obj} = this.props.selectedSong;
    const [title, artist, lyrics] = [song_obj.track_name, song_obj.artist_name, lyrics_obj.lyrics_body];

    return (
      <div className="song-detail col-md-8">
        <div className="details">
          <div>Title: {title}</div>
          <div>Artist: {artist}</div>
        </div>
        <div className="lyrics">
          <div>Lyrics: {lyrics}</div>
        </div>
      </div>
    );
  }
};


function mapStateToProps({ selectedSong }){
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
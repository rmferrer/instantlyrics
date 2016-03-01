import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SongDetail extends Component {

  static formatLyrics(lyrics){
    return { __html: lyrics.replace(/\r?\n|\r/g, '<br/>') };
  };

  render(){
    if(_.isEmpty(this.props.selectedSong)){
      return (
        <div className="song-detail col-md-8" />
      );
    }
    const [song_obj, lyrics_obj] = [this.props.selectedSong.song, this.props.selectedSong.lyrics];
    const [title, artist] = [song_obj.track_name, song_obj.artist_name];
    const lyrics = SongDetail.formatLyrics(lyrics_obj.lyrics_body);

    return (
      <div className="song-detail col-md-8">
        <div className="details">
          <div>Title: {title}</div>
          <div>Artist: {artist}</div>
        </div>
        <div className="lyrics">
          <div>
            Lyrics:
            <span dangerouslySetInnerHTML={lyrics} />
          </div>
        </div>
      </div>
    ); // dangerouslySetInnerHTML relies on SongDetail.formatLyrics being secure
  };

};


function mapStateToProps({ selectedSong }){
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
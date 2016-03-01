import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import sanitizeHtml from 'sanitize-html';


class SongDetail extends Component {

  static formatLyrics(lyrics){
    const dirty = lyrics.replace(/\r?\n|\r/g, '<br/>')
    const clean = sanitizeHtml(dirty, {
      allowedTags: ['br']
    });
    return { __html: clean};
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
          <div className="song-title">{title}</div>
          <div className="artist-name">{artist}</div>
        </div>
        <div className="lyrics" dangerouslySetInnerHTML={lyrics} />
      </div>
    ); // dangerouslySetInnerHTML relies on SongDetail.formatLyrics being secure
  };

};


function mapStateToProps({ selectedSong }){
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
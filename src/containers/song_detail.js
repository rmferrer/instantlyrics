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
    const {title, artist, lyrics} = this.props.selectedSong;
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
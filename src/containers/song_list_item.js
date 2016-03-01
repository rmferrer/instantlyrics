import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectSong } from '../ducks/selected_song';

class SongListItem extends Component {
  render() {
    const {selectSong, song} = this.props;
    const [coverArtUrl, title, artist] = [song.album_coverart_350x350, song.track_name, song.artist_name];

    return (
      <li onClick={() => selectSong(song)} className="list-group-item">
        <div className="song-item media">
          <div className="media-left">
            <img className="media-object" src={coverArtUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">Title: {title}</div>
            <div className="media-heading">Artist: {artist}</div>
          </div>
        </div>
      </li>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectSong }, dispatch);
};

export default connect(null, mapDispatchToProps)(SongListItem);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectSong } from '../ducks/selected_song';

class SongListItem extends Component {
  render() {
    const {selectSong, song, isExactHit} = this.props;
    const [coverArtUrl, title, artist] = [song.album_coverart_100x100, song.track_name, song.artist_name];
    const itemClassName = isExactHit ? "list-group-item exact-hit" : "list-group-item"
    return (
      <li onClick={() => selectSong(song)} className={itemClassName}>
        <div className="song-item media">
          <div className="media-left">
            <img className="media-object" src={coverArtUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
            <div className="media-heading">{artist}</div>
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
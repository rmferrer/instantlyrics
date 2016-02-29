import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectSong } from '../ducks/selected_song';

class SongListItem extends Component {
  render() {
    const {selectSong, song} = this.props;

    return (
      <li onClick={() => selectSong(song)}>
        <div>
          Title: {song.title}
        </div>
        <div>
          Artist: {song.artist}
        </div>
      </li>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectSong }, dispatch);
};

export default connect(null, mapDispatchToProps)(SongListItem);
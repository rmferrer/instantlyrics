import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongListItem from '../containers/song_list_item'

class SongList extends Component {
  render(){
    const songItems = this.props.songs.map(songItem => {
      const song = songItem.track;
      return (
        <SongListItem key={song.track_id} song={song}/>
      );
    });
    return (
      <ul className="col-md-4 list-group">
        { songItems }
      </ul>
    );
  };
};

function mapStateToProps({ songs }){
  return { songs };
};

export default connect(mapStateToProps)(SongList);
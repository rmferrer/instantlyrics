import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongListItem from '../containers/song_list_item'

class SongList extends Component {
  render(){
    const songItems = this.props.songs.map(song => {
      return (
        <SongListItem key={song.key} song={song}/>
      );
    });
    return (
      <ul>
        { songItems }
      </ul>
    );
  };
};

function mapStateToProps({ songs }){
  return { songs };
};

export default connect(mapStateToProps)(SongList);
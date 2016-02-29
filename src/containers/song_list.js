import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongListItem from '../components/song_list_item'

class SongList extends Component {
  render(){
    const songItems = this.props.songs.map(song => {
      return (
        <SongListItem key={song.key} song={song}/>
      );
    });
    return (
      <div>
        { songItems }
      </div>
    );
  };
};

function mapStateToProps({ songs }){
  return { songs };
};

export default connect(mapStateToProps)(SongList);
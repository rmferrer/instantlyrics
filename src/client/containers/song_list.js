import React, { Component } from 'react';
import { connect } from 'react-redux';

import SongListItem from '../containers/song_list_item'

class SongList extends Component {
  render(){
    const exactHit = this.props.songs.exact;
    const relatedHits = this.props.songs.related;

    const songItems = relatedHits.map(songItem => {
      const song = songItem.track;
      return (
        <SongListItem key={song.track_id} song={song} isExactHit={false} />
      );
    });

    if (exactHit){
      return (
        <div className="col-md-4">
          <SongListItem key="exactHit" song={exactHit.track} isExactHit={true} />
          <br/>
          <br/>
          <ul className="list-group">
            { songItems }
          </ul>
        </div>
      );
    }
    else{
      return (
        <ul className="col-md-4 list-group">
          { songItems }
        </ul>
      );      
    }
  };
};

function mapStateToProps({ songs }){
  return { songs };
};

export default connect(mapStateToProps)(SongList);
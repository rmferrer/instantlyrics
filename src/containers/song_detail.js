import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class SongDetail extends Component {
  render(){
    if(_.isEmpty(this.props.selectedSong)){
      return (<div></div>);
    }
    const {title, artist, lyrics} = this.props.selectedSong;
    return (
      <div>
        <div>
          Title: {title};
        </div>
        <div>
          Artist: {artist};
        </div>
        <div>
          Lyrics: {lyrics};
        </div>
      </div>
    );
  }
};


function mapStateToProps({ selectedSong }){
  return { selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
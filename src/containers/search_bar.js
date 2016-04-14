import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { searchSongs } from '../ducks/songs'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.searchSongs = _.debounce(term => this.props.searchSongs(term), 300);
  }

  onInputChange(event){
    const term = event.target.value;
    const [track, artist, album] = term.trim().split('|');
    this.setState({term});
    this.searchSongs({track, artist, album});
  };

  render(){
    return (
      <div className="search-bar">
        <input placeholder="Enter song name..." value={this.state.term} onChange={this.onInputChange} />
      </div>
    );
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ searchSongs }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchSongs } from '../ducks/songs'

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    const term = event.target.value;
    this.setState({term});
    this.props.searchSongs(term);
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
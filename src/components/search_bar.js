import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    const term = event.target.value;
    this.setState({term});
    this.props.onSearchTermChange(term);
  };

  render(){
    return (<input placeholder="Enter song name..." value={this.state.term} onChange={this.onInputChange} />);
  };
};

export default SearchBar;
import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SongDetail from '../containers/song_detail';
import SongList from '../containers/song_list';

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <SongDetail />
        <SongList />
      </div>
    );
  };
};

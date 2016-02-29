import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/search_bar';
import SongDetail from '../components/song_detail';
import SongList from '../components/song_list';

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

import React, { Component } from 'react';

import SearchBar from './search_bar';
import MetarList from './metar_list';

export default class MetarDecoder extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <MetarList />
      </div>
    );
  }
}

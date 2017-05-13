import React, { Component } from 'react';

import SearchBar from './search_bar';
import MetarList from './metar_list';

export default class MetarDecoder extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        
        <h1 className="metar-list-heading">Decoded METARs</h1>
        <MetarList />
      </div>
    );
  }
}

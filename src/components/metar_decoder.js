import React, { Component } from 'react';
import ReactGA from 'react-ga';

import SearchBar from './search_bar';
import MetarList from './metar_list';

export default class MetarDecoder extends Component {
  constructor() {
    super();

    // Google Analytics
    ReactGA.initialize('UA-98122822-1');
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div>
        <SearchBar />

        <h1 className="wxd-page-header">Decoded METARs</h1>
        <MetarList />
      </div>
    );
  }
}

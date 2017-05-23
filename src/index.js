import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import NavBar from './components/nav_bar';
import PageFooter from './components/page_footer';
import MetarDecoder from './components/metar_decoder';
import Contact from './components/contact';
import Login from './components/login';

import reducers from './reducers';

import '../assets/favicons/favicons';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div className="wxd-main-container">
        <div className="wxd-body-container">
          <NavBar />
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/" component={MetarDecoder} />
          </Switch>
        </div>
        <PageFooter />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));

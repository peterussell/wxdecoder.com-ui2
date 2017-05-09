import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container wxd-navbar">
        <nav className="navbar navbar-toggleable-sm">
          <button className="navbar-toggler navbar-toggler-right"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand mr-auto" href="#">
            <img src={require(`../../assets/img/wxd-logo-sm.png`)} />
          </a>

          <ul className="navbar-nav mr-right">
            <li className="nav-item active">
              <Link to='/'>HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact'>CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to='/login'>LOG IN</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

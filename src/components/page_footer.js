import React, { Component } from 'react';

export default class PageFooter extends Component {
  render() {
    return (
      <div className="wxd-footer">
        <p className="footer-text text-right">
          &copy; 2017 Pete Russell
           | <a href="https://twitter.com/nz_pete">@nz_pete</a>
        </p>
      </div>
    );
  }
}

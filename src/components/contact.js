import React, { Component } from 'react';

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact | WX Decoder"
  }

  render() {
    return (
      <div>
        <h1 className="wxd-page-header">Contact Information</h1>
        <p className="contact-text">
          <img src={require(`../../assets/img/twitter-logo.png`)} />
          Follow <a href="https://twitter.com/wxdecoder" target="_blank">
          @wxdecoder</a> on Twitter
        </p>
      </div>
    );
  }
}

import React, { Component } from 'react';

export default class Contact extends Component {
  componentDidMount() {
    document.title = "Contact | WX Decoder"
  }
  render() {
    return (
      <div>
        <h1 className="wxd-page-header">Contact Information</h1>
      </div>
    );
  }
}

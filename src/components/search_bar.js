import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { fetchMetar } from '../actions'

class SearchBar extends Component {
  renderInputField(field) {
    const { meta: { touched, error } } = field;
    const className = `input-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div>
        <div className={className}>
          <input
            className="form-control search-bar"
            type="text" {...field.input} />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-default decode-button">
              Decode
            </button>
          </span>
        </div>
        <div className="text-help">{ touched ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.fetchMetar(values);
    //console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form-container wxd-search-bar-container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="metarInput" component={this.renderInputField} />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.metarInput) {
    errors.metarInput = "Enter a METAR";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'MetarInputForm'
})(
  connect(null, {fetchMetar})(SearchBar)
);

import React, { Component } from 'react';

class ReportForm extends React.Component {
  render() {
    return pug`
      .report-form
        h3.grey What do you want to report ?
        textarea(row='10', cols='7', placeholder='Enter text', required)
        button.btn-primary(type='submit') Send a report
    `;
  }
}

export default ReportForm;
import React, { Component } from 'react';

class ReportForm extends React.Component {
  render() {
    return pug`
      .row
        .col-md-2
        .col-md-8
          .report-form
            h3.grey What do you want to report ?
            textarea(row='10', cols='7', placeholder='Enter text')
            button.btn-primary Send a report
        .col-md-2
    `;
  }
}

export default ReportForm;
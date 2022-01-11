import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';

import { clearAlert } from '../store/actions';

const AlertBox = (props) => {
  const { style, message, clearAlert } = props;

  function closeAlert() {
    clearAlert();
  }

  return (
    <Alert color={style} className="alert-box">
      {message}
      <button className="close" onClick={closeAlert}>x</button>
    </Alert>
  )
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps, { clearAlert })(AlertBox);
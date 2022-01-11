import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, } from 'reactstrap';

import AlertBox from '../utils/AlertBox';

import { confirmEmail } from '../../store/actions';

const ConfirmEmail = (props) => {
  const { alert, confirmEmail } = props;
  const { token } = useParams();

  const handleSubmit = () => {
    confirmEmail(token);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        {
          alert.showAlert && alert.location === 'confirmEmail'
            ? <AlertBox style={alert.alertType} message={alert.message} />
            : null
        }
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Button color="primary" onClick={handleSubmit}>Confirm Email Address</Button>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps, { confirmEmail })(ConfirmEmail);
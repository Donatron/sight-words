import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Container, Row, Col, Button, } from 'reactstrap';

import AlertBox from '../utils/AlertBox';

import { confirmEmail } from '../../store/actions/auth';

const ConfirmEmail = (props) => {
  const { alert, confirmEmail } = props;
  const { token } = useParams();
  const { t } = useTranslation();

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
          <Button color="primary" onClick={handleSubmit}>{t('confirm-email')}</Button>
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
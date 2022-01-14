import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import AlertBox from '../utils/AlertBox';
import { clearError } from '../../store/actions';
import { resetPassword } from '../../store/actions/auth';

const ResetPassword = (props) => {
  const { alert, resetPassword } = props;
  const { token } = useParams();
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const { t } = useTranslation();

  const handleSubmit = () => {
    const userData = {
      password,
      passwordConfirm
    }

    resetPassword(userData, token);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        {
          alert.showAlert && alert.location === 'resetPassword'
            ? <AlertBox
              style={alert.alertType}
              message={alert.message}
            />
            : null
        }
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>{t('reset-password')}</h3>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">{t('new-password')}</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter new password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="email">{t('confirm-new-password')}</Label>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm new password"
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </FormGroup>
            <div className="site-content_content-login-submit">
              <Button color="secondary" onClick={handleSubmit}>{t('reset')}</Button>
            </div>
            <span>
              <Link to="/" className="site-content_content-login-redirect">
                <FontAwesomeIcon icon={faArrowLeft} />{t('back-to-login')}
              </Link>
            </span>
          </Form>
        </Col >
      </Row >
    </Container >
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps, { resetPassword, clearError })(ResetPassword);
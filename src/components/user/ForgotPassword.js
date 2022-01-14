import React, { useState } from 'react';
import { Link, } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import AlertBox from '../utils/AlertBox';
import { clearError } from '../../store/actions';
import { forgotPassword } from '../../store/actions/auth';

const ForgotPassword = (props) => {
  const { alert, clearError, forgotPassword } = props;
  const [userName, setUserName] = useState(null);
  const { t } = useTranslation();

  const handleSubmit = () => {
    const user = {
      userName: userName,
    }

    clearError();
    forgotPassword(user);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        {
          alert.showAlert && alert.location === 'forgotPassword'
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
            <h3>{t('forgot-password')}</h3>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">{t('email')} / {t('username')}</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email or username"
                type="email"
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormGroup>
            <div className="site-content_content-login-submit">
              <Button color="secondary" onClick={handleSubmit}>
                {t('password-reset-token')}
              </Button>
            </div>
            <span>
              <Link to="/" className="site-content_content-login-redirect">
                <FontAwesomeIcon
                  icon={faArrowLeft}
                />{t('back-to-login')}
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

export default connect(mapStateToProps, { forgotPassword, clearError })(ForgotPassword);
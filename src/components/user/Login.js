import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import AlertBox from '../utils/AlertBox';
import { clearError } from '../../store/actions';
import { loginUser } from '../../store/actions/auth';

const Login = (props) => {
  const { alert, clearError, loginUser } = props;
  const [userName, setUserName] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const { t } = useTranslation();

  const handleSubmit = () => {
    const user = {
      userName: userName,
      password: userPassword
    }

    clearError();
    loginUser(user);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        {
          alert.showAlert && alert.location === 'login'
            ? <AlertBox style={alert.alertType} message={alert.message} />
            : null
        }
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>{t('login')}</h3>
            <span>{t('dont-have-account')}{' '}
              <Link to="/register" className="site-content_content-login-redirect">{t('register-here')} {' '}
                {' '} <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">{t('email')} / {t('username')}</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email or username"
                type="email"
                onChange={(e) => setUserName(e.target.value)}
              />
              <Label for="email">{t('password')}</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </FormGroup>
            <div className="site-content_content-login-submit">
              <Button color="secondary" onClick={handleSubmit}>{t('login')}</Button>
            </div>
            <span>{t('forgotten-password')}{' '}
              <Link to="/forgot-password" className="site-content_content-login-redirect">
                {t('click-to-reset')}
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

export default connect(mapStateToProps, { loginUser, clearError })(Login);
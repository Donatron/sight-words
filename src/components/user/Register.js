import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import AlertBox from '../utils/AlertBox';
import { clearError } from '../../store/actions';
import { registerUser } from '../../store/actions/auth';


const Register = (props) => {
  const { alert, registerUser } = props;
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    userName: null,
    password: null,
    passwordConfirm: null,
    receiveEmails: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleClickReceiveEmails = (e) => {
    setFormData({
      ...formData,
      receiveEmails: !formData.receiveEmails
    });
  }

  const handleSubmit = () => {
    registerUser(formData);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        {
          alert.showAlert && alert.location === 'register'
            ? <AlertBox
              style={alert.alertType}
              message={alert.message}
            />
            : null
        }
        <Col
          xs={{ size: 10, offset: 1 }}
        >
          <Form className="site-content_content-login">
            <h3>{t('register')}</h3>
            <span>{t('already-registered')}{' '}
              <Link to="/login">{t('login-here')} {' '}
                {' '} <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
            <div className="site-content_content-login-form">
              <Row>
                <Col
                  xs={12}
                  md={6}
                >
                  <FormGroup>
                    <Label for="name">{t('name')}</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      type="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">{t('email')}</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Email address"
                      type="email"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">{t('username')}</Label>
                    <Input
                      id="userName"
                      name="userName"
                      placeholder="Username"
                      type="text"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                </Col>


                <Col
                  xs={12}
                  md={6}
                >
                  <FormGroup>
                    <Label for="email">{t('password')}</Label>
                    <Input
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="email">{t('confirm-password')}</Label>
                    <Input
                      id="passwordConfirm"
                      name="passwordConfirm"
                      placeholder="Confirm Password"
                      type="password"
                      onChange={(e) => handleChange(e)}
                    />
                  </FormGroup>
                  <Row>
                    <Col xs={12}>
                      <FormGroup>
                        <Input
                          id="receiveEmails"
                          name="receiveEmails"
                          type="checkbox"
                          onChange={(e) => handleClickReceiveEmails(e)}
                        />
                        <Label for="receiveEmails" className="receive-emails_label">
                          {t('receive-emails')}
                        </Label>
                        <br />
                        <i className="receive-emails_disclaimer">{t('receive-emails-disclaimer')}</i>
                      </FormGroup>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
            <Button color="secondary" onClick={handleSubmit}>{t('register')}</Button>
          </Form>
        </Col>
      </Row >
    </Container >
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert
  }
}

export default connect(mapStateToProps, { registerUser, clearError })(Register);
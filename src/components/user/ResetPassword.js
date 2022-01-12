import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import AlertBox from '../utils/AlertBox';
import { clearError } from '../../store/actions';
import { resetPassword } from '../../store/actions/auth';

const ResetPassword = (props) => {
  const { alert, clearError, resetPassword } = props;
  const { token } = useParams();
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);

  console.log(token);

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
            ? <AlertBox style={alert.alertType} message={alert.message} />
            : null
        }
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>Reset Password</h3>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">New Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter new password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Label for="email">Confirm New Password</Label>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm new password"
                type="password"
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </FormGroup>
            <div className="site-content_content-login-submit">
              <Button color="secondary" onClick={handleSubmit}>Reset</Button>
            </div>
            <span>
              <Link to="/" className="site-content_content-login-redirect">
                <FontAwesomeIcon icon={faArrowLeft} />Back To Login
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
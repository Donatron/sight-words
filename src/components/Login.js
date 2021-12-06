import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import Error from './Error';
import { loginUser, clearError } from '../store/actions';


const Login = (props) => {
  const { error, clearError, loginUser } = props;
  const [emailAddress, setEmailAddress] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleSubmit = () => {
    const user = {
      email: emailAddress,
      password: userPassword
    }

    clearError();
    loginUser(user);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>Login</h3>
            <span>Don't have an account?{' '}
              <Link to="/register">Register here {' '}
                {' '} <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </span>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <Label for="email">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
              />
              {
                error && <Error message={error.message} />
              }
            </FormGroup>
            <Button color="secondary" onClick={handleSubmit}>Log In</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    error: state.error
  }
}

export default connect(mapStateToProps, { loginUser, clearError })(Login);
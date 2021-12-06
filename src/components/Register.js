import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';

import Error from './Error';
import { registerUser, clearError } from '../store/actions';


const Register = (props) => {
  const { error, clearError, registerUser } = props;
  const [emailAddress, setEmailAddress] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const [formData, setFormData] = useState({
    email: null,
    userName: null,
    password: null,
    passwordConfirm: null
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    // const user = {
    //   email: emailAddress,
    //   password: userPassword
    // }

    // clearError();
    // loginUser(user);

    registerUser(formData);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>Register</h3>
            <FormGroup className="site-content_content-login-form">
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email address"
                type="email"
                onChange={(e) => handleChange(e)}
              />
              <Label for="email">Username</Label>
              <Input
                id="userName"
                name="userName"
                placeholder="Username"
                type="text"
                onChange={(e) => handleChange(e)}
              />
              <Label for="email">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                onChange={(e) => handleChange(e)}
              />
              <Label for="email">Confirm Password</Label>
              <Input
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Confirm Password"
                type="password"
                onChange={(e) => handleChange(e)}
              />
              {
                error && <Error message={error.message} />
              }
            </FormGroup>
            <Button color="secondary" onClick={handleSubmit}>Register</Button>
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

export default connect(mapStateToProps, { registerUser, clearError })(Register);
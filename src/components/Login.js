import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, } from 'reactstrap';

const Login = () => {
  const [emailAddress, setEmailAddress] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  const handleSubmit = () => {
    const user = {
      email: emailAddress,
      password: userPassword
    }

    console.log(user);
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col
          xs={{ size: 10, offset: 1 }}
          md={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>Login</h3>
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
            </FormGroup>
            <Button color="secondary" onClick={handleSubmit}>Log In</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
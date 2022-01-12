import React from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Container, Row, Col, Form, Button, } from 'reactstrap';


const NotFound = () => {
  const location = useLocation()

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col
          xs={{ size: 10, offset: 1 }}
          lg={{ size: 6, offset: 3 }}
        >
          <Form className="site-content_content-login">
            <h3>Not Found</h3>
            <p>Unable to locate a page at {`${process.env.PUBLIC_URL}${location.pathname}`}</p>
            <Button color="secondary">
              <Link to='/'>Return to home page</Link>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
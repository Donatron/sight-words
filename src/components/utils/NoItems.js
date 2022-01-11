import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';


const NoItems = ({ type, redirectTo }) => {
  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <h2>You don't have any {type} saved yet</h2>
          <Button color="primary" className="btn-no-items">
            <Link to={`/${redirectTo}`}>Add {type}</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default NoItems;
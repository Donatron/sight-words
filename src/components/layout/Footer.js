import React from 'react';
import { Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <Row className="footer">
      <Col xs={12}>
        {"\u00A9"} {new Date().getFullYear()} <a
          href="https://www.dmwebdev.com.au"
          target="_blank"
          rel="noreferrer"
        >
          Don Macarthur Web Development
        </a>
      </Col>
    </Row>
  )
};

export default Footer;
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Word from './Word';

const RandomWords = ({ words }) => {
  const generateRandomWordIndex = () => {
    return Math.floor(Math.random() * (words.length - 1));
  }

  const [wordIndex, setWordIndex] = useState(generateRandomWordIndex());

  const handleClick = () => {
    setWordIndex(generateRandomWordIndex());
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Word word={words[wordIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          <Button color="primary" onClick={handleClick}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RandomWords;
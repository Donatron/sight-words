import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import phraseListData from '../data/phrasesData.json';
import Phrase from './Phrase';

const RandomPhrases = () => {
  const { phrases } = phraseListData;

  const generateRandomPhraseIndex = () => {
    return Math.floor(Math.random() * (phrases.length - 1));
  }

  const [phraseIndex, setPhraseIndex] = useState(generateRandomPhraseIndex());

  const handleClick = () => {
    setPhraseIndex(generateRandomPhraseIndex());
  }

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Phrase phrase={phrases[phraseIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          <Button color="primary" onClick={handleClick}>Next</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default RandomPhrases;
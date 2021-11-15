import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';


import sightWordsData from '../data/wordsData.json';
import LoadingSpinner from './LoadingSpinner';
import Word from './Word';

const SightWords = () => {
  const { words } = sightWordsData;
  const [wordIndex, setWordIndex] = useState(0);

  const incrementWordIndex = () => {
    setWordIndex(wordIndex + 1);
  }

  const decrementWordIndex = () => {
    setWordIndex(wordIndex - 1);
  }

  if (!words.length) return <LoadingSpinner />

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Word word={words[wordIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          {wordIndex > 0 ? wordIndex < words.length ? <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={decrementWordIndex} className="site-content_content-buttons-left" /> : null : null}
          {wordIndex < words.length - 1 ? <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={incrementWordIndex} className="site-content_content-buttons-right" /> : null}
        </Col>
      </Row>
    </Container>
  );
}

export default SightWords;
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import LoadingSpinner from './LoadingSpinner';
import Phrase from './Phrase';

import phraseListData from '../data/phrasesData.json';

const Phrases = () => {
  const { phrases } = phraseListData;

  const [phraseIndex, setPhraseIndex] = useState(0);

  const incrementPhraseIndex = () => {
    setPhraseIndex(phraseIndex + 1);
  }

  const decrementPhraseIndex = () => {
    setPhraseIndex(phraseIndex - 1);
  }

  if (!phrases.length) return <LoadingSpinner />

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Phrase phrase={phrases[phraseIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          {phraseIndex > 0 ? phraseIndex < phrases.length ? <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={decrementPhraseIndex} className="site-content_content-buttons-left" /> : null : null}
          {phraseIndex < phrases.length - 1 ? <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={incrementPhraseIndex} className="site-content_content-buttons-right" /> : null}
        </Col>
      </Row>
    </Container>
  )
}

export default Phrases;
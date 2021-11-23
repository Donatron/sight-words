import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import LoadingSpinner from './LoadingSpinner';
import Phrase from './Phrase';

import phraseListData from '../data/phrasesData.json';
import { fetchPhrases } from '../store/actions'

const Phrases = (props) => {
  const { phrases, auth, fetchPhrases } = props;
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (!auth.token) return;
    fetchPhrases(auth.token);
  }, [auth.token])

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

const mapStateToProps = state => {
  return {
    phrases: state.phrases.phrases,
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchPhrases })(Phrases);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import LoadingSpinner from './LoadingSpinner';
import Login from './Login';
import Phrase from './Phrase';

import { fetchPhrases } from '../store/actions'

const Phrases = (props) => {
  const { phrases, auth, user, fetchPhrases } = props;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phraseList = phrases.filter(phrase => !phrase.complete);

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

  if (user.user.id === null || user.user.userName === null) return <Login />

  if (!phraseList.length) return <h3>You don't have any phrases yet...</h3>

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Phrase phrase={phrases[phraseIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          {phraseIndex > 0 ? phraseIndex < phraseList.length ? <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={decrementPhraseIndex} className="site-content_content-buttons-left" /> : null : null}
          {phraseIndex < phraseList.length - 1 ? <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={incrementPhraseIndex} className="site-content_content-buttons-right" /> : null}
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    phrases: state.phrases.phrases,
    auth: state.auth,
    user: state.user
  }
}

export default connect(mapStateToProps, { fetchPhrases })(Phrases);
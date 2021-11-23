import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import LoadingSpinner from './LoadingSpinner';
import Login from './Login';
import Word from './Word';

import { fetchSightWords } from '../store/actions'

const SightWords = (props) => {
  const { user, auth, fetchSightWords, words } = props;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (!auth.token) return;
    fetchSightWords(auth.token);
  }, [auth.token])

  const incrementWordIndex = () => {
    setWordIndex(wordIndex + 1);
  }

  const decrementWordIndex = () => {
    setWordIndex(wordIndex - 1);
  }

  if (user.user.id === null || user.user.userName === null) return <Login />

  if (!words.length) return <h3>You don't have any words yet...</h3>

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

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth,
    words: state.words.words
  }
}

export default connect(mapStateToProps, { fetchSightWords })(SightWords);
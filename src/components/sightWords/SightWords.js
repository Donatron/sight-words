import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Word from './Word';
import NoItems from '../utils/NoItems';
import TextToSpeech from '../utils/TextToSpeech';

import { fetchSightWords } from '../../store/actions/sightWords'

const SightWords = (props) => {
  const { auth, fetchSightWords, words } = props;
  const [wordIndex, setWordIndex] = useState(0);
  const wordList = words.filter(word => !word.complete);

  useEffect(() => {
    if (!auth.token) return;
    fetchSightWords(auth.token);
  }, [auth.token, fetchSightWords]);

  const incrementWordIndex = () => {
    setWordIndex(wordIndex + 1);
  }

  const decrementWordIndex = () => {
    setWordIndex(wordIndex - 1);
  }

  if (!wordList.length) return <NoItems type="sight words" redirectTo='update-word-list' />

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Word selectedWord={wordList[wordIndex]} />
        </Col>
        <TextToSpeech text={wordList[wordIndex].word} />
        <Col xs={12} md={6} className="site-content_content-buttons">
          {
            wordIndex > 0
              ? wordIndex < wordList.length
                ? <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  onClick={decrementWordIndex}
                  className="site-content_content-buttons-left"
                />
                : null
              : null
          }
          {
            wordIndex < wordList.length - 1
              ? <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                onClick={incrementWordIndex}
                className="site-content_content-buttons-right"
              />
              : null
          }
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
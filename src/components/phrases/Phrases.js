import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

import Phrase from './Phrase';
import NoItems from '../utils/NoItems';
import TextToSpeech from '../utils/TextToSpeech';

import { fetchPhrases } from '../../store/actions/phrases'

const Phrases = (props) => {
  const { phrases, auth, fetchPhrases } = props;
  const [phraseIndex, setPhraseIndex] = useState(0);
  const phraseList = phrases.filter(phrase => !phrase.complete);

  useEffect(() => {
    if (!auth.token) return;
    fetchPhrases(auth.token);
  }, [auth.token, fetchPhrases]);

  const incrementPhraseIndex = () => {
    setPhraseIndex(phraseIndex + 1);
  }

  const decrementPhraseIndex = () => {
    setPhraseIndex(phraseIndex - 1);
  }

  if (!phraseList.length) return <NoItems type="phrases" redirectTo="update-phrase-list" />

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Phrase selectedPhrase={phraseList[phraseIndex]} />
        </Col>
        <TextToSpeech text={phraseList[phraseIndex].phrase} />
        <Col
          xs={12}
          md={6}
          className="site-content_content-buttons"
        >
          {
            phraseIndex > 0
              ? phraseIndex < phraseList.length
                ? <FontAwesomeIcon
                  icon={faArrowAltCircleLeft}
                  onClick={decrementPhraseIndex}
                  className="site-content_content-buttons-left"
                />
                : null
              : null
          }
          {
            phraseIndex < phraseList.length - 1
              ? <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                onClick={incrementPhraseIndex}
                className="site-content_content-buttons-right"
              />
              : null
          }
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
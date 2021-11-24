import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';

import Phrase from './Phrase';

const RandomPhrases = (props) => {
  const { phrases } = props;
  const phraseList = phrases.filter(phrase => !phrase.complete);

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
          <Phrase phrase={phraseList[phraseIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          {phraseList.length > 1 && <Button color="primary" onClick={handleClick}>Next</Button>}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    phrases: state.phrases.phrases
  }
}

export default connect(mapStateToProps)(RandomPhrases);
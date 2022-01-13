import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Container, Row, Col, Button } from 'reactstrap';

import Word from './Word';
import NoItems from '../utils/NoItems';

const RandomWords = (props) => {
  const { words } = props;
  const wordList = words.filter(word => !word.complete);

  const generateRandomWordIndex = () => {
    return Math.floor(Math.random() * (wordList.length));
  }

  const [wordIndex, setWordIndex] = useState(generateRandomWordIndex());

  const handleClick = () => {
    setWordIndex(generateRandomWordIndex());
  }

  if (!wordList.length) return <NoItems type="sight words" redirectTo='update-word-list' />

  return (
    <Container className="site-content">
      <Row className="site-content_content">
        <Col xs={12} >
          <Word selectedWord={wordList[wordIndex]} />
        </Col>
        <Col xs={6} className="site-content_content-buttons">
          {wordList.length > 1 && <Button color="primary" onClick={handleClick}>Next</Button>}
        </Col>
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    words: state.words.words
  }
}

export default connect(mapStateToProps)(RandomWords);
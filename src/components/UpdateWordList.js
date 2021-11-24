import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';

import WordDetails from './WordDetails';

import { fetchPhrases, fetchSightWords } from '../store/actions';

const UpdateWordList = (props) => {
  const { words, phrases, token, fetchPhrases } = props;

  useEffect(() => {
    if (!phrases.length) fetchPhrases(token);
    if (!words.length) fetchSightWords(token);
  }, [])

  return (
    <Container className="site-content">
      <Row className="site-content_phrase-list">
        <Col xs={12}>
          <h2>Word List</h2>
        </Col>
        <Col xs={12}>
          <Table hover>
            <thead>
              <tr>
                <th>
                  Word
                </th>
                <th>
                  Complete
                </th>
                <th>
                  Edit
                </th>
                <th>
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {words.map(word => <WordDetails word={word} key={word.id} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    words: state.words.words,
    phrases: state.phrases.phrases,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { fetchPhrases, fetchSightWords })(UpdateWordList);
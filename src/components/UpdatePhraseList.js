import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';

import PhraseDetails from './PhraseDetails';

import { fetchPhrases } from '../store/actions';

const UpdatePhraseList = (props) => {
  const { phrases, token, fetchPhrases } = props;

  useEffect(() => {
    if (!phrases.length) fetchPhrases(token);
  }, [])

  return (
    <Container className="site-content">
      <Row className="site-content_phrase-list">
        <Col xs={12}>
          <h2>Phrase List</h2>
        </Col>
        <Col xs={12}>
          <Table hover>
            <thead>
              <tr>
                <th>
                  Phrase
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
              {phrases.map(phrase => <PhraseDetails phrase={phrase} key={phrase.id} />)}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    phrases: state.phrases.phrases,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { fetchPhrases })(UpdatePhraseList);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import WordDetails from './WordDetails';
import AddWordModal from './modals/AddWordModal'
import DeleteConfirmModal from './modals/DeleteConfirmModal'

import { fetchSightWords, deleteSightWord } from '../store/actions';

const UpdateWordList = (props) => {
  const { words, token, fetchSightWords, deleteSightWord } = props;
  words.sort((a, b) => a.value.toLowerCase() > b.value.toLowerCase() ? 1 : -1);

  const [showAddWordModal, setShowAddWordModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [wordId, setWordId] = useState(null);

  useEffect(() => {
    if (!words.length) fetchSightWords(token);
  }, []);

  const toggleAddWordModal = () => {
    setShowAddWordModal(!showAddWordModal);
  }

  const toggleConfirmDeleteModal = (wordId) => {
    setWordId(wordId)
    setShowConfirmDeleteModal(!showConfirmDeleteModal);
  }

  const handleConfirmDelete = (wordId) => {
    deleteSightWord(wordId, token);
    toggleConfirmDeleteModal();
  }

  const handleClickAddWord = () => {
    toggleAddWordModal();
  }

  return (
    <Container className="site-content">
      <AddWordModal
        isOpen={showAddWordModal}
        toggleModal={toggleAddWordModal}
      />
      <DeleteConfirmModal
        isOpen={showConfirmDeleteModal}
        toggleModal={toggleConfirmDeleteModal}
        phraseId={wordId}
        onConfirmDelete={handleConfirmDelete}
      />
      <Row className="site-content_phrase-list">
        <Col xs={12}>
          <h2>Word List</h2>
        </Col>
        <Col xs={12} className="site-content_phrase-list-table">
          <div className="add-phrase">
            <p>Add Word</p> <FontAwesomeIcon icon={faPlusSquare} onClick={handleClickAddWord} />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>
                  Word
                </th>
                <th>
                  Syllabes
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
              {words.map(word => <WordDetails word={word} key={word.id} onClickDelete={() => toggleConfirmDeleteModal(word.id)} />)}
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
    token: state.auth.token
  }
}

export default connect(mapStateToProps, { fetchSightWords, deleteSightWord })(UpdateWordList);
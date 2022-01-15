import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import WordDetails from './WordDetails';
import AddWordModal from '../modals/AddWordModal'
import DeleteConfirmModal from '../modals/DeleteConfirmModal'
import AlertBox from '../utils/AlertBox';

import { fetchSightWords, updateSightWord, deleteSightWord } from '../../store/actions/sightWords';

const UpdateWordList = (props) => {
  const {
    alert,
    words,
    token,
    user,
    fetchSightWords,
    updateSightWord,
    deleteSightWord
  } = props;
  words.sort((a, b) => a.word.toLowerCase() > b.word.toLowerCase() ? 1 : -1);

  const [showAddWordModal, setShowAddWordModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [wordId, setWordId] = useState(null);
  const { t } = useTranslation();

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

  const handleClickComplete = (wordId, token, params) => {
    updateSightWord(wordId, token, params)
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
        {
          alert.showAlert && alert.location === 'sightWordsList'
            ? <AlertBox style={alert.alertType} message={alert.message} />
            : null
        }
        <Col xs={12}>
          <h2>{`${user.userName}${t('word-list')}`}</h2>
        </Col>
        <Col
          xs={12}
          className="site-content_phrase-list-table"
        >
          <div className="add-phrase">
            <p>{t('add-word')}</p>
            <FontAwesomeIcon
              icon={faPlusSquare}
              onClick={handleClickAddWord}
            />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>
                  {t('word')}
                </th>
                <th className="syllables">
                  {t('syllables')}
                </th>
                <th>
                  {t('complete')}
                </th>
                {/* <th>
                  Edit
                </th> */}
                <th>
                  {t('delete')}
                </th>
              </tr>
            </thead>
            <tbody>
              {words.map(word => (
                <WordDetails
                  wordObject={word}
                  key={word._id}
                  onClickDelete={() => toggleConfirmDeleteModal(word._id)}
                  onClickComplete={handleClickComplete}
                />
              )
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    alert: state.alert,
    words: state.words.words,
    token: state.auth.token,
    user: state.user.user
  }
}

export default connect(
  mapStateToProps,
  {
    fetchSightWords,
    updateSightWord,
    deleteSightWord
  }
)(UpdateWordList);
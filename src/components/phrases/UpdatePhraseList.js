import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import PhraseDetails from './PhraseDetails';
import AddPhraseModal from '../modals/AddPhraseModal';
import EditPhraseModal from '../modals/EditPhraseModal';
import DeleteConfirmModal from '../modals/DeleteConfirmModal';
import AlertBox from '../utils/AlertBox';

import { fetchPhrases, updatePhrase, deletePhrase } from '../../store/actions/phrases';

const UpdatePhraseList = (props) => {
  const {
    alert,
    phrases,
    token,
    user,
    fetchPhrases,
    updatePhrase,
    deletePhrase
  } = props;

  phrases.sort((a, b) => a.phrase.toLowerCase() > b.phrase.toLowerCase() ? 1 : -1);

  const [showAddPhraseModal, setShowAddPhraseModal] = useState(false);
  const [showEditPhraseModal, setShowEditPhraseModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeletePhraseModal] = useState(false);
  const [phraseId, setPhraseId] = useState(null);
  const { t } = useTranslation();

  const selectedPhrase = phrases.filter(phrase => phrase._id === phraseId)[0]

  useEffect(() => {
    if (!phrases.length) fetchPhrases(token);
  }, []);

  const handleClickAddPhrase = () => {
    setShowAddPhraseModal(!showAddPhraseModal);
  }

  const toggleAddPhraseModal = () => {
    setShowAddPhraseModal(!showAddPhraseModal);
  }

  const toggleEditPhraseModal = (phraseId) => {
    setPhraseId(phraseId);
    setShowEditPhraseModal(!showEditPhraseModal);
  }

  const toggleConfirmDeleteModal = (phraseId) => {
    setPhraseId(phraseId)
    setShowConfirmDeletePhraseModal(!showConfirmDeleteModal);
  }

  const handleConfirmDelete = (phraseId) => {
    deletePhrase(phraseId, token);
    toggleConfirmDeleteModal();
  }

  const handleConfirmEdit = (phraseId, token, params) => {
    updatePhrase(phraseId, token, params);
  }

  const handleClickComplete = (phraseId, token, params) => {
    updatePhrase(phraseId, token, params);
  }

  return (
    <Container className="site-content">
      <AddPhraseModal
        isOpen={showAddPhraseModal}
        toggleModal={toggleAddPhraseModal}
      />
      <EditPhraseModal
        isOpen={showEditPhraseModal}
        toggleModal={toggleEditPhraseModal}
        onConfirmEdit={handleConfirmEdit}
        phraseId={phraseId}
        selectedPhrase={selectedPhrase}
      />
      <DeleteConfirmModal
        isOpen={showConfirmDeleteModal}
        toggleModal={toggleConfirmDeleteModal}
        phraseId={phraseId}
        onConfirmDelete={handleConfirmDelete}
      />
      <Row className="site-content_phrase-list">
        {
          alert.showAlert && alert.location === 'phrasesList'
            ? <AlertBox
              style={alert.alertType}
              message={alert.message}
            />
            : null
        }
        <Col xs={12}>
          <h2>{`${user.userName}${t('phrase-list')}`}</h2>
        </Col>
        <Col
          xs={12}
          className="site-content_phrase-list-table"
        >
          <div className="add-phrase">
            <p>{t('add-phrase')}</p>
            <FontAwesomeIcon
              icon={faPlusSquare}
              onClick={handleClickAddPhrase}
            />
          </div>
          <Table hover>
            <thead>
              <tr>
                <th>
                  {t('phrase')}
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
              {phrases.map(phrase => {
                return <PhraseDetails
                  selectedPhrase={phrase}
                  key={phrase._id}
                  onClickEdit={() => toggleEditPhraseModal(phrase._id)}
                  onClickDelete={() => toggleConfirmDeleteModal(phrase._id)}
                  onClickComplete={handleClickComplete}
                />
              })}
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
    phrases: state.phrases.phrases,
    token: state.auth.token,
    user: state.user.user
  }
}

export default connect(
  mapStateToProps,
  {
    fetchPhrases,
    updatePhrase,
    deletePhrase
  }
)(UpdatePhraseList);
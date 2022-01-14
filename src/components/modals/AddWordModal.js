import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormText
} from 'reactstrap';

import { insertSightWord } from '../../store/actions/sightWords';

const AddWordModal = (props) => {
  const { isOpen, toggleModal, insertSightWord, token } = props;
  const [wordData, setWordData] = useState({
    word: '',
    syllables: ''
  });
  const { t } = useTranslation();


  const handleInputChange = (e) => {
    setWordData({
      ...wordData,
      [e.target.name]: e.target.value
    });
  }

  const handleAddWordSumbit = () => {
    insertSightWord(wordData, token);
    toggle();
  }

  const toggle = () => {
    setWordData({ word: '', syllables: '' });
    toggleModal();
  }

  return (
    <Modal
      centered
      size="lg"
      toggle={toggle}
      isOpen={isOpen}
    >
      <ModalHeader toggle={toggleModal}>
        {t('add-new-word')}
      </ModalHeader>
      <ModalBody>
        <Input
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={wordData.word}
          name="word"
        />
        <FormText>{t('enter-word-here')}</FormText>
        <Input
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={wordData.syllables}
          name="syllables"
        />
        <FormText>{t('enter-syllables')}</FormText>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleAddWordSumbit}
        >
          {t('submit')}
        </Button>
        {' '}
        <Button onClick={toggleModal}>
          {t('cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    user: state.user.user
  }
}

export default connect(mapStateToProps, { insertSightWord })(AddWordModal);

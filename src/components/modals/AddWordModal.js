import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormText
} from 'reactstrap';

import { insertSightWord } from '../../store/actions';

const AddWordModal = (props) => {
  const { isOpen, toggleModal, insertSightWord, token } = props;
  const [wordData, setWordData] = useState({
    word: '',
    syllables: ''
  });


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
        Add New Word
      </ModalHeader>
      <ModalBody>
        <Input
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={wordData.word}
          name="word"
        />
        <FormText>Enter your word here</FormText>
        <Input
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={wordData.syllables}
          name="syllables"
        />
        <FormText>Enter syllables, separated by a comma - ","</FormText>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleAddWordSumbit}
        >
          Submit
        </Button>
        {' '}
        <Button onClick={toggleModal}>
          Cancel
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

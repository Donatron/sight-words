import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from 'reactstrap';

const EditWordModal = (props) => {
  const {
    isOpen,
    toggleModal,
    phraseId,
    token,
    selectedPhrase,
    onConfirmEdit
  } = props;

  const [word, setWord] = useState({
    word: '',
    syllables: ''
  });

  useEffect(() => {
    setWord(selectedPhrase);
  }, [selectedPhrase]);

  // TODO: FIND A MORE ELEGANT WAY TO HANDLE THIS
  const handleInputChange = (e) => {
    setTimeout(() => {
      setWord({
        ...word,
        [e.target.name]: e.target.value
      });
    }, 200);
  }

  // TODO: AND THIS...
  const handleEditWordSumbit = () => {
    const params = {
      word: word.value ? word.value : word
    }

    onConfirmEdit(phraseId, token, params)
    toggleModal();
  }


  const toggle = () => {
    setWord(null);
    toggleModal();
  }

  return (
    <Modal
      centered
      size="lg"
      toggle={toggle}
      isOpen={isOpen}
    >
      <ModalHeader toggle={toggle}>
        Edit Word
      </ModalHeader>
      <ModalBody>
        <Input
          type="text"
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={word && word.value}
          name="word"
        />
        <Input
          type="text"
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={word && word.syllables}
          name="syllables"
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleEditWordSumbit}
        >
          Submit
        </Button>
        {' '}
        <Button onClick={toggle}>
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

export default connect(mapStateToProps)(EditWordModal);

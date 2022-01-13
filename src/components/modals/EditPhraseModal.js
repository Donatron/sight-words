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

const EditPhraseModal = (props) => {
  const {
    isOpen,
    toggleModal,
    phraseId,
    token,
    selectedPhrase,
    onConfirmEdit
  } = props;

  const [phrase, setPhrase] = useState(null);

  useEffect(() => {
    setPhrase(selectedPhrase);
  }, [selectedPhrase]);

  // TODO: FIND A MORE ELEGANT WAY TO HANDLE THIS
  const handleInputChange = (e) => {
    setTimeout(() => {
      setPhrase(e.target.value);
    }, 200);
  }

  // TODO: AND THIS...
  const handleEditPhraseSumbit = () => {
    const params = {
      phrase: phrase.value ? phrase.value : phrase
    }

    onConfirmEdit(phraseId, token, params)
    toggleModal();
  }


  const toggle = () => {
    setPhrase(null);
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
        Edit Phrase
      </ModalHeader>
      <ModalBody>
        <Input
          type="textarea"
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
          value={phrase && phrase.value}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleEditPhraseSumbit}
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

export default connect(mapStateToProps)(EditPhraseModal);

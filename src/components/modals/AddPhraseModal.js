import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from 'reactstrap';

import { insertPhrase } from '../../store/actions/phrases';

const AddPhraseModal = (props) => {
  const { isOpen, toggleModal, insertPhrase, token } = props;
  const [phrase, setPhrase] = useState(null);
  const { t } = useTranslation();


  const handleInputChange = (e) => {
    setTimeout(() => {
      setPhrase(e.target.value);
    }, 200)
  }

  // TODO: MAKE SURE EMPTY PHRASE CANNOT BE SUBMITTED
  const handleAddPhraseSumbit = () => {
    insertPhrase(phrase, token);
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
      <ModalHeader toggle={toggleModal}>
        {t('add-new-phrase')}
      </ModalHeader>
      <ModalBody>
        <Input
          type="textarea"
          bsSize="sm"
          onChange={(e) => handleInputChange(e)}
        />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleAddPhraseSumbit}
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

export default connect(mapStateToProps, { insertPhrase })(AddPhraseModal);

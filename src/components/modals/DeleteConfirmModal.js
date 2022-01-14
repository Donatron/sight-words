import React from 'react';
import {
  Modal,
  ModalHeader,
  ModalFooter,
  Button,
} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const DeleteConfirmModal = (props) => {
  const { isOpen, toggleModal, onConfirmDelete, phraseId } = props;
  const { t } = useTranslation();

  const toggle = () => {
    toggleModal();
  }

  const handleConfirmDelete = () => {
    onConfirmDelete(phraseId);
  }

  return (
    <Modal
      centered
      size="lg"
      toggle={toggle}
      isOpen={isOpen}
      className="modal_delete-confirm"
    >
      <ModalHeader toggle={toggleModal}>
        {t('are-you-sure-you-want-to-delete')}
      </ModalHeader>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleConfirmDelete}
        >
          {t('confirm')}
        </Button>
        {' '}
        <Button onClick={toggleModal}>
          {t('cancel')}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteConfirmModal;

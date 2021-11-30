import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalFooter,
  Button,
} from 'reactstrap';

const DeleteConfirmModal = (props) => {
  const { isOpen, toggleModal, onConfirmDelete, phraseId } = props;

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
        Are You Sure You Want To Delete?
      </ModalHeader>
      <ModalFooter>
        <Button
          color="primary"
          onClick={handleConfirmDelete}
        >
          Confirm
        </Button>
        {' '}
        <Button onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteConfirmModal;

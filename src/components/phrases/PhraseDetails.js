import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PhraseDetails = (props) => {
  const {
    selectedPhrase,
    token,
    onClickEdit,
    onClickDelete,
    onClickComplete
  } = props;
  const { phrase, complete } = selectedPhrase;

  const handleClickComplete = (e) => {
    const params = {
      complete: selectedPhrase.complete ? "0" : "1"
    }

    onClickComplete(selectedPhrase._id, token, params);
  }

  const handleClickEdit = () => {
    onClickEdit()
  }

  const handleClickDelete = () => {
    onClickDelete();
  }

  return (
    <tr>
      <th scope="row">
        {phrase}
      </th>
      <td>
        <FontAwesomeIcon icon={complete ? faCheckSquare : faSquare} onClick={(e) => handleClickComplete(e)} />
      </td>
      {/* <td>
        <FontAwesomeIcon icon={faEdit} onClick={handleClickEdit} />
      </td> */}
      <td>
        <FontAwesomeIcon icon={faTrashAlt} onClick={handleClickDelete} />
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(PhraseDetails);
import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { deletePhrase } from '../store/actions';

const PhraseDetails = (props) => {
  const {
    phrase,
    token,
    onClickEdit,
    onClickDelete,
    onClickComplete
  } = props;
  const { value, complete } = phrase;

  const handleClickComplete = (e) => {
    const params = {
      complete: phrase.complete ? "0" : "1"
    }

    onClickComplete(phrase.id, token, params);
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
        {value}
      </th>
      <td>
        <FontAwesomeIcon icon={complete ? faCheckSquare : faSquare} onClick={(e) => handleClickComplete(e)} />
      </td>
      <td>
        <FontAwesomeIcon icon={faEdit} onClick={handleClickEdit} />
      </td>
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

export default connect(mapStateToProps, { deletePhrase },)(PhraseDetails);
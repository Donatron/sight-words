import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const WordDetails = (props) => {
  const { word, onClickDelete, onClickComplete, token } = props;
  const { value, syllables, complete } = word;

  const handleClickComplete = (e) => {
    const params = {
      complete: word.complete ? "0" : "1"
    }

    onClickComplete(word.id, token, params);
  }

  const handleClickEdit = (e) => {
    console.log('Clicking edit');
  }

  const handleClickDelete = (e) => {
    onClickDelete();
  }

  return (
    <tr>
      <th scope="row">
        {value}
      </th>
      <td>
        {syllables}
      </td>
      <td>
        <FontAwesomeIcon icon={complete ? faCheckSquare : faSquare} onClick={handleClickComplete} />
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

export default connect(mapStateToProps)(WordDetails);
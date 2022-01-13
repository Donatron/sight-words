import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const WordDetails = (props) => {
  const { wordObject, onClickDelete, onClickComplete, token } = props;
  const { word, syllables, complete } = wordObject;

  const handleClickComplete = (e) => {
    const params = {
      complete: !wordObject.complete ? true : false
    }

    onClickComplete(wordObject._id, token, params);
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
        {word}
      </th>
      <td>
        {syllables}
      </td>
      <td>
        <FontAwesomeIcon icon={complete ? faCheckSquare : faSquare} onClick={handleClickComplete} />
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

export default connect(mapStateToProps)(WordDetails);
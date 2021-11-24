import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const PhraseDetails = ({ phrase }) => {
  const { value, complete } = phrase;

  const handleClickComplete = (e) => {
    console.log('Clicking complete');
  }

  const handleClickEdit = (e) => {
    console.log('Clicking edit');
  }

  const handleClickDelete = (e) => {
    console.log('Clicking delete');
  }

  return (
    <tr>
      <th scope="row">
        {value}
      </th>
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

export default PhraseDetails;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const WordDetails = (props) => {
  const { word, onClickDelete } = props;
  const { value, syllables, complete } = word;

  const handleClickComplete = (e) => {
    console.log('Clicking complete');
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

export default WordDetails;
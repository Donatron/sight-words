import React from 'react';

import Syllables from './Syllables';

const Word = ({ word }) => {
  const { value, syllables } = word;

  return (
    <div className="">
      <h3>{value}</h3>
      <Syllables syllables={syllables} />
    </div>
  );
}

export default Word;
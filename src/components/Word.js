import React from 'react';

import Syllables from './Syllables';

const Word = ({ selectedWord }) => {
  const { word, syllables } = selectedWord;

  return (
    <div className="">
      <h3>{word}</h3>
      <Syllables syllables={syllables} />
    </div>
  );
}

export default Word;
import React, { useState } from 'react';
import { Button } from 'reactstrap';

import Word from './Word';

const SightWords = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);

  const incrementWordIndex = () => {
    setWordIndex(wordIndex + 1);

    console.log(wordIndex);
  }
  return (
    <div className="">
      <h1>Sight Words</h1>
      <Word word={words[wordIndex]} />
      <Button color="primary" onClick={incrementWordIndex} >Increment Word</Button>
    </div>
  );
}

export default SightWords;
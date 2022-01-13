import React from 'react';

const Phrase = ({ selectedPhrase }) => {
  const { phrase } = selectedPhrase;

  return (
    <div className="">
      <h3>{phrase}</h3>
    </div>
  );
}

export default Phrase;
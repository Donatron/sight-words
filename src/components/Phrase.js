import React from 'react';

const Phrase = ({ phrase }) => {
  const { value } = phrase;

  return (
    <div className="">
      <h3>{value}</h3>
    </div>
  );
}

export default Phrase;
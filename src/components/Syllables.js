import React from 'react';

const Syllables = ({ syllables }) => {

  const syllablesArray = syllables.split(",");

  return (
    syllablesArray.map((syllable, i) => {
      return <p key={i}>{syllable}{i < syllables.length - 1 ? "/" : null}</p>
    })
  )
}

export default Syllables;
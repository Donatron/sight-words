import React from 'react';

const Syllables = ({ syllables }) => {

  return (
    syllables.map((syllable, i) => {
      return <p key={i}>{syllable} {i < syllables.length - 1 ? " / " : null} </p>
    })
  )
}

export default Syllables;
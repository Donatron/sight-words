import React from 'react';

const Error = ({ message }) => {
  return (
    <div className="error-message" style={{ textAlign: "center", marginTop: "15px" }}>
      <p><i>{message}</i></p>
    </div>
  );
}

export default Error;
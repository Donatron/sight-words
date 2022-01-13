import React from 'react';
import { Spinner } from 'reactstrap';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <Spinner color="info" />
    </div>
  )
}

export default LoadingSpinner;
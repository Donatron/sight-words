import React from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';

const Header = (props) => {
  const { token } = props;

  return (
    <header className="header">
      <h1>Sight Words</h1>
      {token && <Navigation />}
    </header>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Header);
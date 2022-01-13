import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Navigation from './Navigation';

const Header = (props) => {
  const { token, onChangeLanguage } = props;
  const { t } = useTranslation();

  const onChange = (e) => {
    onChangeLanguage(e)
  }

  return (
    <header className="header">
      <h1>{t('sight-words')}</h1>
      <select onChange={(e) => onChange(e)}>
        <option value="en">English</option>
        <option value="th">{t('thai')}</option>
      </select>
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
import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

import Navigation from './Navigation';
import LanguageSelector from '../utils/LanguageSelector';

const Header = (props) => {
  const { token, onChangeLanguage } = props;
  const { t } = useTranslation();

  return (
    <header className="header">
      <h1>{t('sight-words')}</h1>
      {
        !token && <LanguageSelector onChangeLanguage={onChangeLanguage} />
      }
      {token && <Navigation onChangeLanguage={onChangeLanguage} />}
    </header>
  );
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

export default connect(mapStateToProps)(Header);
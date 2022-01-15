import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import LanguageSelector from '../utils/LanguageSelector';

import { logoutUser } from '../../store/actions/auth'

const Navigation = (props) => {
  const { onChangeLanguage } = props;
  const [showNavbar, setShowNavbar] = useState(false);
  const { t } = useTranslation();

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  }

  return (
    <div>
      <Navbar expand="md" >
        <NavbarToggler
          onClick={toggleNavbar}
          bg="light"
          expand="sm"
          className="mr-2"
        />
        <Collapse navbar isOpen={showNavbar}>
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown inNavbar nav >
              <DropdownToggle caret nav>
                {t('sight-words')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/"
                    >
                      {t('all-words')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/random-words"
                    >
                      {t('random-words')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/update-word-list"
                    >
                      {t('update-word-list')}
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav  >
              <DropdownToggle caret nav >
                {t('phrases')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/phrases"
                    >
                      {t('all-phrases')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/random-phrases"
                    >
                      {t('random-phrases')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link
                      onClick={toggleNavbar}
                      to="/update-phrase-list"
                    >
                      {t('update-phrase-list')}
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown inNavbar nav >
              <DropdownToggle caret nav >
                {t('user')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link
                      to="/"
                      onClick={() => {
                        toggleNavbar();
                        props.logoutUser();
                      }}
                    >
                      {t('logout')}
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <LanguageSelector onChangeLanguage={onChangeLanguage} />
        </Collapse>
      </Navbar>
    </div >
  );
}

export default connect(null, { logoutUser })(Navigation);
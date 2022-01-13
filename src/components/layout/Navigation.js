import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { logoutUser } from '../../store/actions/auth'

const Navigation = (props) => {
  const { t } = useTranslation();

  return (
    <div>
      <Navbar
        expand="md"
      >
        <NavbarToggler onClick={function noRefCheck() { }} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                {t('sight-words')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link to="/">
                      {t('all-words')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/random-words">
                      {t('random-words')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/update-word-list">
                      {t('update-word-list')}
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                {t('phrases')}
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link to="/phrases">
                      {t('all-phrases')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/random-phrases">
                      {t('random-phrases')}
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/update-phrase-list">
                      {t('update-phrase-list')}
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/" onClick={() => props.logoutUser()}>
                {t('logout')}
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default connect(null, { logoutUser })(Navigation);
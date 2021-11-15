import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Navigation = () => {
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
                Sight Words
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link to="/">
                      All Words
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/random-words">
                      Random Words
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/update-word-list">
                      Update Word List
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
                Phrases
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem>
                  <NavItem>
                    <Link to="/phrases">
                      All Phrases
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/random-phrases">
                      Random Phrases
                    </Link>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <Link to="/update-phrase-list">
                      Update Phrase List
                    </Link>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
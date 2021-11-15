import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

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
              <DropdownMenu right>
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
                  Update Word List
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
              <DropdownMenu right>
                <DropdownItem>
                  All Phrases
                </DropdownItem>
                <DropdownItem>
                  Random Phrases
                </DropdownItem>
                <DropdownItem>
                  Update Phrase List
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
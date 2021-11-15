import React from 'react';
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
                  All Words
                </DropdownItem>
                <DropdownItem>
                  Random Words
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
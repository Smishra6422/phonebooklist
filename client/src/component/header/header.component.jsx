import React, { useState } from "react";
import "./header.style.scss";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { BrowserRouter as Router, withRouter, Link } from "react-router-dom";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ffffff" };
  } else {
    return { color: "#111111" };
  }
};

const Header = ({ history }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      <Navbar color="" dark expand="md">
        <NavbarBrand href="/">Phone-book</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <hr />
          <Nav navbar>
            <NavItem>
              <NavLink style={currentTab(history, "/")} href="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={currentTab(history, "/addphonebook")}
                href="/addphonebook"
              >
                Add Phonebook
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink style={currentTab(history, "/about")} href="/about">
                About Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
